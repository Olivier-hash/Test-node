const { Inventory } = require('../models');

exports.createInventory = async (req, res) => {
    const { productId, quantity, warehouse } = req.body;

    try {
        const inventory = await Inventory.create({ productId, quantity, warehouse });
        res.status(201).json({ message: 'inventory created', inventory });
    } catch (error) {
        console.log('error occurred', error);
    }
};
