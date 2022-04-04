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

async function updateUser(req, res) {
  let { id } = req.params;
  let { name,contact } = req.body;
  let dbResp;

  try {
    dbResp = await User.update(
      {
        name: name,
        contact: contact,
      },
      {
        where: {
          id: id,
        },
      }
    );
  } catch (Excp) {
    dbResp = {
      message: Excp.errors[0].message,
    };
  }
  dbResp[0] === 1
    ? res.send({ message: "User profile successfully updated" })
    : res.send({ message: "Something went wrong" }).sendStatus(400);
}


async function getAllUsers(req, res) {
  const dbResp = await User.findAll();
  res.send(dbResp);
}

module.exports = {
  addUser,
  getAllUsers,
  updateUser
};
