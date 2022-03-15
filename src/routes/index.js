const express = require('express');
const router = express.Router();
const user = require('./user');
const hotel = require('./hotel');
const room = require('./room');
const bill = require('./bill');
const reservation = require('./reservation');



// REGESTRING ROUTES
router.use('/users', user);
router.use('/hotels', hotel);
router.use('/rooms', room);
router.use('/bills', bill);
router.use('/reservation', reservation);



module.exports = router;






