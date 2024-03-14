const { findAll, upload } = require("../models/movie.model.js");

const getMovies = async (req, res) => {
  try {
    const movies = await findAll();

    console.log(movies);

    res.status(200).json(movies.rows);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const uploadPhoto = async (req, res) => {
  const file = req.file;
  const { id } = req.params;

  try {
    const image = await upload(id, file.filename);

    console.log(file.filename);

    res.status(200).json({ image: image });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getMovies, uploadPhoto };
