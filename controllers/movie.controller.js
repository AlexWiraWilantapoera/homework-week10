const { findAll, findOne, upload, update, remove, add } = require("../models/movie.model.js");

const getMovies = async (req, res) => {
  try {
    const movies = await findAll();

    res.status(200).json(movies.rows);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMoviesDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await findOne(id);

    res.status(200).json(movies.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addMovie = async (req, res) => {
  const { title, genres, year } = req.body;
  try {
    const result = await add(title, genres, year);
    
    res.status(200).json({message: "Movie Added"});
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

    res.status(200).json({ message: "Upload Succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removeMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await remove(id);

    res.status(200).json({ message: "Delete Successfully"});
  } catch (error) {
    
  }
}

module.exports = { getMovies, getMoviesDetail, uploadPhoto, updateMovie, removeMovie, addMovie };
