var express = require('express');
var router = express.Router();
const roomsRoute = require('./rooms')
const roomCategoriesRoute = require('./roomCategories')
const roomBoysRoute = require('./roomBoys')
const roomCheckInRoute = require('./roomCheckIn')
const signUpRoute = require('./signUp')
// const loginRoute = require('./login')


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.use('/signUp', signUpRoute)
// router.use('/login', loginRoute)
router.use('/rooms', roomsRoute)
router.use('/roomCategories', roomCategoriesRoute)
router.use('/roomBoys', roomBoysRoute)
router.use('/roomCheckIn', roomCheckInRoute)


  module.exports = router;