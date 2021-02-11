var express = require('express');
var router = express.Router();

const AccountController = require('../controller/AccountController');
const passport = require('passport')

//get create account
router.post('/register',AccountController.RegisterUser)
router.get('/login', passport.authenticate('jwt',{session: false}),AccountController.LoginUser);


module.exports = router;