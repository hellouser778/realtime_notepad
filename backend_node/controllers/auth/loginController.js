const Joi = require("joi");
const bcrypt = require("bcrypt");
const genToken = require("../../services/jwtService");

const userSchema = require("../../models/userSchema");

const loginController = {
  async login(req, res, next) {
    const loginSchema = await Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    const { error } = loginSchema.validate(req.body);
    if (error) {
      console.log(error);
    }

    const { email, password } = req.body;
    try {
      const user = await userSchema.findOne({ email });
      if (!user) {
        res.send({
          status: 200,
          message: "user not exist, please register ",
          token: genToken,
        });
      } else {
          const matchPassword = await bcrypt.compare(password, user.password)
          if(!matchPassword){
              res.send("wrong password, try again")
          }else{
              const access_token = genToken(email)
              res.send(access_token)
          }
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = loginController;
