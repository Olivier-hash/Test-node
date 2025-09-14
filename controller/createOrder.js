const { Order,profile } = require('../models');

exports.createOrder = async (req, res) => {

    
    const {   } = req.body;

    try {
        const order = await Order.create({ customerId, orderDate, status });
        res.status(201).json({ message: 'order created manually', order });
    } catch (error) {
        console.log('not occuring', error);
    }
};
