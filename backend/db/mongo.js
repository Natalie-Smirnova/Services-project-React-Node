require('dotenv').config();
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

async function connect() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch(e) {
        console.error(e);
    }
}

module.exports = connect;