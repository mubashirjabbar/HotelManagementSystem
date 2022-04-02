const users = require("./user");
const hotel = require("./hotel");
const room = require("./room");
const bill = require("./bill");
const reservation = require("./reservation");
const login = require("./login");
const signup = require("./signup");

module.exports = {
  ...users,
  ...hotel,
  ...room,
  ...bill,
  ...reservation,

  ...login,
  ...signup,
};
