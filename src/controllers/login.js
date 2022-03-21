const { User } = require("../models/index");

async function loginUser(req, res) {
  let { email, password } = req.body;
  try {
    result = await User.findOne({
      where: { email: email, password: password },
    });
    // console.log("result", result);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
}

module.exports = {
  loginUser,
};
