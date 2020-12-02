
const express = require('express');
const router = express.Router();

const chaptersHandler = require('./handler/chapters');

router.post('/', chaptersHandler.create);
router.put('/:id', chaptersHandler.update);
router.delete('/:id', chaptersHandler.destroy);
router.get('/:id', chaptersHandler.get);
router.get('/', chaptersHandler.getAll);

module.exports = router;
