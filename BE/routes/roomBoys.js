var express = require('express');
var router = express.Router();
var roomBoys = require('../controller/roomBoys.controller')


router.post('/create',roomBoys.create)
router.get('/', roomBoys.listAll)
router.post('/:id', roomBoys.list)
router.post('/put/:id', roomBoys.deleteRoomBoys)

module.exports = router;