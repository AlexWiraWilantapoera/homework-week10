const router = require("express").Router();

const { getMovies, getMoviesDetail, uploadPhoto, updateMovie, removeMovie, addMovie } = require("../controllers/movie.controller.js");
const multer = require("../middlewares/multer.js");

router.get("/", getMovies);

router.get("/:id", getMoviesDetail);

router.post("/add", addMovie);

router.put("/update/:id", updateMovie);

router.patch("/upload/:id", multer, uploadPhoto);

router.delete("/delete/:id", removeMovie);

module.exports = router;
