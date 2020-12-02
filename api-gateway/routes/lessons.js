
const express = require('express');
const router = express.Router();

const lesssonsHandler = require('./handler/lessons');

router.post('/', lesssonsHandler.create);
router.put('/:id', lesssonsHandler.update);
router.delete('/:id', lesssonsHandler.destroy);
router.get('/:id', lesssonsHandler.get);
router.get('/', lesssonsHandler.getAll);


module.exports = router;
