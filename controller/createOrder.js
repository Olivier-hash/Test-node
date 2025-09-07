const { Order } = require('../models');

exports.createOrder = async (req, res) => {
    const { customerId,  } = req.body;

    try {
        const orders = await Order.create({ customerId, orderDate, status });
        res.status(201).json({ message: 'order created manually', order });
    } catch (error) {
        console.log('error occurred', error);
    }
};
