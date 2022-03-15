const { Bill } = require("../models/index");

async function addBill(req, res) {
  let { user_id, bill_data, bill_amount } = req.body;
  let dbResp;
  try {
    dbResp = await Bill.create({
      user_id: user_id,
      bill_data: bill_data,
      bill_amount: bill_amount,
    });
  } catch (Excp) {
    console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  res.send(dbResp);
}

async function getBillByID(req, res) {
  let { id } = req.params;

  const dbResp = await Bill.findByPk(id);
  dbResp
    ? res.send(dbResp)
    : res.send({ message: "Bill not found!" }).status(404);
}

module.exports = {
  addBill,
  getBillByID,
};
