var express = require('express');
var router = express.Router();
var roomCategories = require('../controller/roomCategories.controller')


router.post('/create',roomCategories.create)
router.get('/', roomCategories.listAll)
router.post('/:id', roomCategories.list)
router.post('/delete/:id', roomCategories.deleteCategory)

module.exports = router;