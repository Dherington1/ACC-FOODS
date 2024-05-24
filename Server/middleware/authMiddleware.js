const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your User model as needed

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Get token from cookies

        if (!token) {
            console.log('No token found');
            return res.status(401).json({ message: 'Not authenticated' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token

        console.log('Token decoded:', decoded);

        const user = await User.findByPk(decoded.id); // Find user based on token payload

        if (!user) {
            console.log('User not found for ID:', decoded.id);
            return res.status(401).json({ message: 'User not found' });
        }

        console.log('User authenticated:', user);

        req.user = { id: user.user_id }; // Ensure `user_id` is set correctly
        console.log('req.user set:', req.user);
        next();
    } catch (error) {
        console.error('Error in authMiddleware:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
