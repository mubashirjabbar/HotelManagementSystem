const bcrypt = require("bcrypt");

const { User } = require("../models/index");

async function loginUser(req, res) {
  let { email, password } = req.body;

  try {
    result = await User.findOne({ where: { email: email } });
    console.log({ result });
    try {
      let response = await bcrypt.compareSync(
        password,
        result.dataValues.password
      );
      if (response) {
        res.status(200).send(result);
      } else {
        res.status(400).send("Invalid email or password");
      }
    } catch (error) {
      res.send(error.message);
    }
  } catch (error) {
    res.send("Something went wrong");
  }
}

// async function loginUser(req, res) {
//   let dbResp,
//     status = 200;
//   let { email, password } = req.body;
//   try {
//     dbResp = await User.findOne({
//       where: { email: email, password: password },
//     });

//     if (dbResp) {
//       dbResp = {
//           message:dbResp
//         }
//     }
//     else {
//       dbResp = {
//         message:"Invalid email or password"
//       }
//       status=400
//     }

//     console.log(dbResp);
//     res.status(status).send(dbResp);
//   } catch (Excp) {
//     console.log("Excp", Excp);
//   }
// }

module.exports = {
  loginUser,
};
