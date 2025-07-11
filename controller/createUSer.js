const { User } = require('../models');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'user created', user });
    } catch (error) {
        console.log('error occurred', error);
    }
};
