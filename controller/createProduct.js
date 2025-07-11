const { Product } = require('../models');

exports.createProduct = async (req, res) => {
    const { productName, price, stock } = req.body;

    try {
        const product = await Product.create({ productName, price, stock });
        res.status(201).json({ message: 'product created', product });
    } catch (error) {
        console.log('error occurred', error);
    }
};
