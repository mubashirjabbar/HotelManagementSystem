const { User } = require("../models/index");

async function addUser(req, res) {
  let { name, email, password, contact, role } = req.body;
  let dbResp;
  try {
    dbResp = await User.create({
      name: name,
      contact: contact,
      email: email,
      password: password,
      role: role,
    });
  } catch (Excp) {
    // console.log({ Excp });
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  res.send(dbResp);
}

async function getAllUsers(req, res) {
  const dbResp = await User.findAll();
  res.send(dbResp);
}

module.exports = {
  addUser,
  getAllUsers,
};
