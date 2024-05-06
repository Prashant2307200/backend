const mongoose = require('mongoose');
const mongoURL = "mongodb://127.0.0.1:27017/quoteapp"

const connectToDatabase = async () => {
    try{
        await mongoose.connect(mongoURL/*,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }*/)
        console.log("Connected to MongoDB successfully done");
    }
    catch(err){
        console.error("Database connection Fail " +err);
        process.exit(0);
    }
}

module.exports = connectToDatabase;