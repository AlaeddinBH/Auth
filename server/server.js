const express = require("express");
const ConnectionDB = require("./config/ConnectionDB");
const config = require("config");
const user = require('./routes/user');
const product = require("./routes/product");

const app = express();
app.use(express.json());
app.use('/user', user);
app.use('/product', product);


ConnectionDB();

var PORT = config.get('PORT') || 5000;

app.listen(PORT, (err) => 
     err ? console.error(err) : console.log(`Server is running on PORT ${PORT}`)
);
