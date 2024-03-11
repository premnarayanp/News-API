const express = require('express');
const router = express.Router();
console.log('router loaded');

router.use('/users', require('./users'));
router.use('/news', require('./news'));
module.exports = router;