const product = require("../models/product");


exports.addProduct = async(req, res) => {
    const {code, name, description, price, stock, minStock} = req.body;
    const existantProduct = await product.findOne({code});
    if (existantProduct) return res.status(409).json({msg:'Product already exists'});
    try {
        const newProduct = new product ({
            code,
            name,
            description,
            price,
            stock,
            minStock,
        });
        
        await newProduct.save();
        res.send({   
           
                _id: newProduct._id,
                code: newProduct.code,
                name: newProduct.name,
                description: newProduct.description,
                price: newProduct.price,
                stock: newProduct.stock,
                minStock: newProduct.minStock,
            
        })
        // res.status(200).json(newProduct);
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

exports.getProduct = async(req, res) => {
    try {
        const Products = await product.find();
        res.send(Products);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.delProduct = async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.send("Product deleted");
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.editProduct = async (req, res) => {
    try {
        const editedProduct = await product.findByIdAndUpdate(req.params.id, {...req.body}, {new: true});
        res.send(editedProduct);
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


