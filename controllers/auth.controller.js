const { generateToken } = require("../utils/jwt.js");
const { loginData } = require("../models/user.model.js");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginData(email, password);

    const token = generateToken({
      email: user.email,
      role: user.role,
      password: user.password,
    });

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login };
