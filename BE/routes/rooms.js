var express = require('express');
var router = express.Router();
var rooms = require('../controller/rooms.controller')


router.post('/create',rooms.create)
router.get('/', rooms.listAll)
router.post('/:id', rooms.list)
router.post('/delete/:id', rooms.deleteRooms)

module.exports = router;