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

const add = async (email, gender, password, role) => {
  try {
    if (!email || !gender || !password || !role) {
      res.status(400).json({ message: "Bad Request" });
    } else {
      const result = await pool.query(
        `
        INSERT INTO
          users
            (email, gender, password, role)
          VALUES
            ($1, $2, $3, $4)
        `,
        [email, gender, password, role]
      );

      return result;
    }
  } catch (error) {
    return error;
  }
};

const update = async (id, email, gender, password, role) => {
  try {
    const result = await pool.query(
      `
        UPDATE
          users
        SET
          email = $1,
          gender = $2,
          password = $3,
          role = $4
        WHERE
          id = $5
        `,
      [email, gender, password, role, id]
    );

    return result;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const result = await pool.query(
      `
      DELETE FROM
        users
      WHERE
        id = $1
      `,
      [id]
    );

    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { findAll, update, remove, add };
