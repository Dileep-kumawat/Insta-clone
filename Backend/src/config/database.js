const mongoose = require("mongoose");

async function connectedToDb() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Database`);
}

module.exports = connectedToDb;