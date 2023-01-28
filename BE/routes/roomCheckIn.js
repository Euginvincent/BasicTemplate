var express = require('express');
var router = express.Router();
var roomCheckIn = require('../controller/roomCheckIn.controller')


router.post('/create',roomCheckIn.create)
router.get('/', roomCheckIn.listAll)
router.post('/:id', roomCheckIn.list)
// router.post('/put/:id', roomCheckIn.deleteRoomBoys)

module.exports = router;