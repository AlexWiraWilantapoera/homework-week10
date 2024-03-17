const jwt = require("jsonwebtoken");

const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_ACCESS_KEY);
};

const verifyToken = async (token) => {
  try {
    return await jwt.verify(token, process.env.SECRET_ACCESS_KEY);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateToken, verifyToken };
