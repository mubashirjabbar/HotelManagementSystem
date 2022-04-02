const express = require('express');
const router = express.Router();
const user = require('./user');
const hotel = require('./hotel');
const room = require('./room');
const bill = require('./bill');
const reservation = require('./reservation');
const login = require('./login');
const signup = require('./signup');



// REGESTRING ROUTES
router.use('/users', user);
router.use('/hotels', hotel);
router.use('/rooms', room);
router.use('/bills', bill);
router.use('/reservation', reservation);
router.use('/login', login);
router.use('/signup', signup);



module.exports = router;






