const { findAll, update, remove, add } = require("../models/user.model.js");

const getUsers = async (req, res) => {
  try {
    const users = await findAll();

    res.status(200).json(users.rows);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addUsers = async (req, res) => {
  const { email, gender, password, role } = req.body;
  try {
    const result = await add(email, gender, password, role);

    res.status(200).json({ message: "Users Added", data: result });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { email, gender, password, role } = req.body;
  try {
    const result = await update(id, email, gender, password, role);

    console.log(result);

    res.status(200).json({ message: "Update Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removeUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await remove(id);

    res.status(200).json({ message: "Delete Successfully", data: result });
  } catch (error) {}
};

module.exports = { getUsers, updateUsers, removeUsers, addUsers };
