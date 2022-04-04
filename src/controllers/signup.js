const { User } = require("../models/index");

async function signupUser(req, res) {
    let dbResp, status=201;
  let { email, password, contact, name, role } = req.body;
  try {
    dbResp = await User.create({
      name: name,
      contact: contact,
      email: email,
      password: password,
      role: role,
    });
      
  } catch (Excp) {
    dbResp = {
      message: Excp.errors[0].message === "email must be unique" ? 'This email is already exist':dbResp,
    };
      status=400
  }
  res.status(status).send(dbResp);
    
}

module.exports = {
    signupUser,
};
