const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

/* GET users listing. */
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);

module.exports = router;