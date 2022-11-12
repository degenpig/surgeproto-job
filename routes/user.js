const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const auth = require("../middleware/auth");
const authController = require("../controllers/auth");
const userController = require("../controllers/user");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
  "/register",
  [
    check("name", "Please Enter a valid Name").not().isEmpty(),
    check("passwordResetQuestion", "Please Enter a valid Password Reset Question").not().isEmpty(),
    check("passwordResetAnswer", "Please Enter a valid Password Reset Answer").not().isEmpty(),
    check("username", "Please Enter a valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  authController.register
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  authController.login
);

/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */
router.get("/getProfile", auth, userController.getProfile);

module.exports = router;
