const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

const verifyToken = require('../middlewares/verifyToken');

/* GET users listing. */
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.put('/', verifyToken, usersHandler.update);

module.exports = router;