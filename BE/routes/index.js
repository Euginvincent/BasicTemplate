var express = require('express');
var router = express.Router();
const roomsRoute = require('./rooms')
const roomCategoriesRoute = require('./roomCategories')
const roomBoysRoute = require('./roomBoys')
const roomCheckInRoute = require('./roomCheckIn')


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.use('/rooms', roomsRoute)
router.use('/roomCategories', roomCategoriesRoute)
router.use('/roomBoys', roomBoysRoute)
router.use('/roomCheckIn', roomCheckInRoute)


  module.exports = router;