var express = require('express');
var router = express.Router();
var signUp = require('../controller/signUp.controller')


router.post('/create',signUp.create)
router.get('/', signUp.listAll)
router.post('/:id', signUp.list)
router.post('/delete/:id', signUp.deleteUser)
router.get('/login', signUp.login)

module.exports = router;