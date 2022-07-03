const config = require("config");
const db = config.get('db');


const mongoose = require('mongoose');

const ConnectionDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = ConnectionDB ;