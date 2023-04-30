const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decode = jwt.verify(token.split(" ")[1], "play");

      if (decode) {
        req.body.authorID = decode.authorID;
        next();
      } else {
        res.status(404).send({ Error: "Invalid Token" });
      }
    } catch (err) {
      res.status(404).send({ Error: err.message });
    }
  } else {
    res.status(401).send({ Error: "Please login!!" });
  }
};

module.exports = {
  auth,
};
