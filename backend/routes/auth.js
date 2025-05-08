const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = 'mysecretkey';

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
