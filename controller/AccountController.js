const AccountService = require("../services/AccountService");

const RegisterUser = async (req, res, next) => {
  try {

    console.log("welcome here")
    const user = await AccountService.createUser(req);
    res.status(200).json({ user })

  } catch (error) {
    console.log(error);
  }
};

const LoginUser = async (req, res, next) => {
  try {
    var user=`Hello ${req.user.email}`
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  RegisterUser,
  LoginUser
};
