require('dotenv').config();
const mongoose = require("mongoose");

const PORT = parseInt(process.env.PORT) || 8080;
const DB_URL = process.env.DB_URL;

async function connect() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        server.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });

    } catch(e) {
        console.error(e);
    }
}

module.exports = connect;