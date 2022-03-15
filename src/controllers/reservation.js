const { Reservation } = require("../models/index");

async function addReservation(req, res) {
  let { user_id, room_id, hotel_id, bill_id } = req.body;
  let dbResp;
  try {
    dbResp = await Reservation.create({
      user_id: user_id,
      room_id: room_id,
      hotel_id: hotel_id,
      bill_id: bill_id,
    });
  } catch (Excp) {
    console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  res.send(dbResp);
}

async function getReservationByID(req, res) {
  let { id } = req.params;

  const dbResp = await Reservation.findByPk(id);
  dbResp
    ? res.send(dbResp)
    : res.send({ message: "Reservation not found!" }).status(404);
}

module.exports = {
  addReservation,
  getReservationByID,
};
