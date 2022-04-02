const { User } = require("../models/index");

async function loginUser(req, res) {
  let dbResp,
    status = 200;
  let { email, password } = req.body;
  try {
    dbResp = await User.findOne({
      where: { email: email, password: password },
    });


    if (dbResp) {
      dbResp = {
          message:dbResp
        }
    }
    else {
      dbResp = {
        message:"Invalid email or password"
      }
      status=400
    }


    console.log(dbResp);
    res.status(status).send(dbResp);
  } catch (Excp) {
    console.log("Excp", Excp);
  }
}

module.exports = {
  loginUser,
};
