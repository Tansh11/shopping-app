const jwt = require('jsonwebtoken');
const SECRET = 'mysecretkey';

module.exports = function (req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token' });

    try {
        const decoded = jwt.verify(token.split(" ")[1], SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
