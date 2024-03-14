const { findAll, upload, update, remove, add } = require("../models/movie.model.js");

const getMovies = async (req, res) => {
  try {
    const movies = await findAll();

    console.log(movies);

    res.status(200).json(movies.rows);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addMovie = async (req, res) => {
  const { title, genres, year } = req.body;
  try {
    const result = await add(title, genres, year);
    
    res.status(200).json({message: "Movie Added", data: result});
  } catch (error) {
    
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genres, year } = req.body;
  try {
    const result = await update(id, title, genres, year);
    
    res.status(200).json({ message: "Update Successfully", data: result });
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

const removeMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await remove(id);

    res.status(200).json({ message: "Delete Successfully", data: result });
  } catch (error) {
    
  }
}

module.exports = { getMovies, uploadPhoto, updateMovie, removeMovie, addMovie };
