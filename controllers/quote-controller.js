const fetchURLRand = "https://zenquotes.io/api/random";
const fetchURL = "https://zenquotes.io/api/quotes";
const Quote = require('../models/Quote.js'); 

const asyncWrap = fn => (req, res ,next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const home = asyncWrap(async (req, res) => {  
    let n = Math.floor(Math.random()*50);
    const quotes = await Quote.find({});
    const quoteData = quotes[n];
    res.json(quoteData);
});

const search = asyncWrap(async (req, res) => {
    const { author } = req.query;
    const quotesByAuthor = await Quote.find({ author });
    console.log(quotesByAuthor);
    res.json(quotesByAuthor);
});

module.exports = { home,search };