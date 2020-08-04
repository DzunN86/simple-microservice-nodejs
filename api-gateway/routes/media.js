const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media');

/* GET users listing. */
router.post('/', mediaHandler.create);
router.get('/', mediaHandler.getAll);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;