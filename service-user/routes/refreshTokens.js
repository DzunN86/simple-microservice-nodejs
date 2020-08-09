const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create);

module.exports = router;
