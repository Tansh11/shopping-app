const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

const categories = ['Electronics', 'Clothing', 'Books'];
const items = {
  Electronics: ['Laptop', 'Phone', 'TV'],
  Clothing: ['Shirt', 'Pants', 'Jacket'],
  Books: ['Novel', 'Comics', 'Magazine'],
};

router.get('/categories', authMiddleware, (req, res) => {
  res.json(categories);
});

router.get('/items/:category', authMiddleware, (req, res) => {
  const { category } = req.params;
  res.json(items[category] || []);
});

module.exports = router;
