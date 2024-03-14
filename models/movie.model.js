const pool = require("../config/config.js");

const findAll = async (req, res) => {
  const sql = `
    SELECT
      *
    FROM
      movies
  `;
  try {
    const data = await pool.query(sql);

    return data;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const upload = async (id, source) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        movies
      SET
        photo = $1
      WHERE
        id = $2
      `,
      [source, id]
    );

    console.log(source);

    return result;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { findAll, upload };
