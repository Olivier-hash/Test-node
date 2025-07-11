const { Supplier } = require('../models');

exports.createSupplier = async (req, res) => {
    const { supplierName, contactInfo } = req.body;

    try {
        const supplier = await Supplier.create({ supplierName, contactInfo });
        res.status(201).json({ message: 'supplier created', supplier });
    } catch (error) {
        console.log('error occurred', error);
    }
};
