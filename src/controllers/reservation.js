const { Reservation, Hotel,Room,Bill } = require("../models/index");

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
    // console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  res.send(dbResp);
}

async function getReservationByID(req, res) {
  let { id } = req.params;
  const options = {
    include: [
      {
        model: Hotel,
        attributes: ["id", "name","contact"],
      },
      {
        model: Room,
        attributes: ["id", "room_number"],
      },
      {
        model: Bill,
        attributes: ["id", "bill_amount"],
      },
    ],
    where: { user_id: id },
  };
  const dbResp = await Reservation.findAll(options);

  dbResp
    ? res.send(dbResp)
    : res.status(404).send({ message: "Reservation not found!" });
}

module.exports = {
  addReservation,
  getReservationByID,
};
