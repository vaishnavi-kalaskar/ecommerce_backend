const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  var token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ status: 0, message: "No token provided" });
  }
  jwt.verify(token, "secratekey", (error, decoded) => {
    if (error) {
      return res
        .status(500)
        .json({ status: 0, message: " token has been expired" });
    }

    req.id = decoded.id;
    req.name = decoded.name;
    req.role = decoded.role;

    next();
  });
}
module.exports = verifyToken;
