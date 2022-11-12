var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const config = require("../config/auth.config");
const User = require("../models/User");

exports.getProfile = (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    User.findById(req.user.id).then((user) => res.json(user));
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
};
