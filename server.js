const express = require("express");
const quoteRoute = require('./routers/quote-router.js');
const connectToDatabase = require("./utils/database.js");

const app = express();
const port = 3000; 

app.use('/quote',quoteRoute);

connectToDatabase()
.then(() => {
    app.listen(port, () => {
        console.log(`listing on port http://localhost:${port}/quote`);
    });
})



