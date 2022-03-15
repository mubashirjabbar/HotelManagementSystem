const users = require('./user')
const hotel = require('./hotel')
const room = require('./room')
const bill = require('./bill')
const reservation = require('./reservation')

module.exports = {
    ...users,
    ...hotel,
    ...room,
    ...bill,
    ...reservation
}