const Joi = require("joi");
const bcrypt = require("bcrypt");
const genToken = require("../../services/jwtService");
const erroHandler = require('../../middlewares/erroHandler')

const userSchema = require("../../models/userSchema");

const registerController = {
  async register(req, res, next) {
    const registerSchema = await Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      repeat_password: Joi.ref("password"),
    });
    const { error } = registerSchema.validate(req.body);
    // console.log(error)
    if (error) {
      const error = new Error("An error message")
console.log(error.stack)
    }

    const { username, email, password } = req.body;
    try {
      const exist = await userSchema.exists({ email });

      if (exist) {
        res.send({
          status: 200,
          message: "user already exist, please login ",
          token: genToken,
        });
      } else {
        const hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword);

        const newUser = new userSchema({
          username,
          email,
          password: hashPassword,
        });
        try {
          await newUser.save();
          const access_token = genToken({
            _id: newUser._id,
          });
          res.send(access_token);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = registerController;
