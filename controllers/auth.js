var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const config = require("../config/auth.config");
const User = require("../models/User");
const { use } = require("../routes/userProfile");

exports.register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { name, username, email, password, passwordResetQuestion, passwordResetAnswer } = req.body;
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  try {
    User.findOne({ email }).then((user) => {
      if (user) {
        return res.status(400).json({
          email: "User Already Exists",
        });
      }

      user = new User({
        name,
        username,
        email,
        password,
        passwordResetQuestion,
        passwordResetAnswer
      });

      bcrypt.genSalt(10).then((salt) =>
        bcrypt.hash(password, salt).then((password) => {
          user.password = password;
          user.save().then((data) => res.status(200).json(data));
        })
      );
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
};

exports.login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // console.log("errors");

  const { email, password } = req.body;
  try {
    User.findOne({ email }).then((user) => {
      if (!user)
        return res.status(400).json({
          email: "User Not Exist",
        });

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            password: "Incorrect Password !"
          });
        } else {
          const payload = {
            user: {
              id: user.id,
              name: user.name,
              role: user.role
            },
          };

          jwt.sign(
            payload,
            "randomString",
            {
              expiresIn: 1000000,
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token,
              });
            }
          );
        }
      });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: "Server Error",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
