const mongoose = require('mongoose');
const connectToDatabase = require('./utils/database.js');
const Quote = require('./models/Quote.js');

connectToDatabase()
.then(() => console.log('connected'))
.catch(() => console.log('error'));

let quotes = [];
(async function() {

    await Quote.deleteMany({});

    const fetchURL = "https://zenquotes.io/api/quotes";
    const URLResp = await fetch(fetchURL);
    quotes = await URLResp.json();

    for (const quoteData of quotes) {
        const quote = await new Quote({
            quote: quoteData.q,
            author: quoteData.a,
        });
        await quote.save()
    }
})();


