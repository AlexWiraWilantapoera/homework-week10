const { findAll } = require("../models/user.model.js");

const getUsers = async (req, res) => {
  try {
    const users = await findAll();

    res.status(200).json(users.rows);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getUsers };
