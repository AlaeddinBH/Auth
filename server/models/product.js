const mongoose = require('mongoose'); 

const schema = mongoose.Schema;

const productSchema = new schema ({
    code : String,
    name : String,
    description: String,
    price : String,
    stock: String,
    minStock: String

});

module.exports = mongoose.model('Product', productSchema); 