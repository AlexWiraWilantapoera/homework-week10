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
    return error;
  }
};

const add = async(title, genres, year) =>{
  try {
    if(!title || !genres || !year){
      res.status(400).json({message: "Bad Request"})
    } else {
      const result = await pool.query(
        `
        INSERT INTO
          movies
            (title, genres, year)
          VALUES
            ($1, $2, $3)
        `,
        [title, genres, year]
      )

      return result;
    }
  } catch (error) {
    return error;
  }
}

const update = async (id, title, genres, year) => {
  try {
    if (!title || !genres || !year) {
      res.status(400).json({ message: "Bad Request" });
    } else {
      const result = await pool.query(
        `
        UPDATE
          movies
        SET
          title = $1,
          genres = $2,
          year = $3
        WHERE
          id = $4
        `,
        [title, genres, year, id]
      );

      return result;
    }
  } catch (error) {
    return error;
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
    return error;
  }
};

const remove = async (id) => {
  try {
    const result = await pool.query(
      `
      DELETE FROM
        movies
      WHERE
        id = $1
      `,
      [id]
    )

    return result;
  } catch (error) {
    return error;
  }
}

module.exports = { findAll, upload, update, remove, add };
