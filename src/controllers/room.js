const { Room,Reservation } = require("../models/index");

async function addRoom(req, res) {
  let { room_number, hotel_id, booking_status } = req.body;
  let dbResp;
  try {
    dbResp = await Room.create({
      room_number: room_number,
      hotel_id: hotel_id,
      booking_status: booking_status,
    });
  } catch (Excp) {
    // console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  res.send(dbResp);
}

async function getRoomByID(req, res) {
  let { id } = req.params;
  const options = {
    where: { hotel_id: id },
  };

  const dbResp = await Room.findAll(options);

  dbResp
    ? res.send(dbResp)
    : res.status(404).send({ message: "Room not found!" });
}

async function getAllRooms(req, res) {
  const dbResp = await Room.findAll({ include: { model: Reservation } });
  res.send(dbResp);
}

module.exports = {
  addRoom,
  getAllRooms,
  getRoomByID,
};
