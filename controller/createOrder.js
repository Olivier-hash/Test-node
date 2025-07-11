const { Order } = require('../models');

exports.createOrder = async (req, res) => {
    const { customerId, orderDate, status } = req.body;

    try {
        const order = await Order.create({ customerId, orderDate, status });
        res.status(201).json({ message: 'order created', order });
    } catch (error) {
        console.log('error occurred', error);
    }
};
