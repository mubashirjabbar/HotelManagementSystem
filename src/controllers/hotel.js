const { Hotel } = require("../models/index");


async function addHotel(req, res) {
    let { name, contact, } = req.body;
    let dbResp;
    try {
      dbResp = await Hotel.create({
        name: name,
        contact: contact,
      });
    } catch (Excp) {
      // console.log({ Excp });
      dbResp = {
        message: Excp.errors[0].message,
      };
    }
  res.send(dbResp);

}


async function getHotalByID(req, res) {
  let { id } = req.params;

  const dbResp = await Hotel.findOne({ where: { id: id } });
  
  dbResp
    ? res.send(dbResp)
    : res.status(404).send({ message: "Hotel not found!" });
}



async function getAllHotels(req, res) {
    const dbResp = await Hotel.findAll();
    res.send(dbResp);
  }


module.exports = {
    addHotel,
    getAllHotels,
    getHotalByID,
};
