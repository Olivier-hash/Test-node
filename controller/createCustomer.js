const { Customer } = require('../models');

exports.createCustomer = async (req, res) => {
    const {fullNamame,password} = req.body;

    try {
        const customer = await Customer.create({ name, email, phone });
        res.status(404).json({ message: 'customer created', customer });
    } catch (error) {
        console.log('error occurred');
    }
};
