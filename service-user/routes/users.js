const express = require('express');
const router = express.Router();

const userHandler = require('./handler/users');

router.post('/register', userHandler.register)

module.exports = router;
