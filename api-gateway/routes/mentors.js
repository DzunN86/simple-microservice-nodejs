
const express = require('express');
const router = express.Router();

const mentorsHandler = require('./handler/mentors');

router.get('/', mentorsHandler.getAll);
router.get('/:id', mentorsHandler.get);
router.post('/', mentorsHandler.create);


module.exports = router;
