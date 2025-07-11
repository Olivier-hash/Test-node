const { Category } = require('../models');

exports.createCategory = async (req, res) => {
    const { categoryName } = req.body;

    try {
        const category = await Category.create({ categoryName });
        res.status(201).json({ message: 'category created', category });
    } catch (error) {
        console.log('error occurred', error);
    }
};
