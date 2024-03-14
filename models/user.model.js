const pool = require("../config/config.js");

const findAll = async (req, res) => {
  const sql = `
    SELECT
      *
    FROM
      users
  `;
  try {
    const data = await pool.query(sql);

    return data;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { findAll };
