const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // console.log(req.query.ID);
  const token = req.header("Authorization");
  // console.log(token);
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    // console.log(decoded.user);
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};
