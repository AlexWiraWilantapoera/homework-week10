const router = require("express").Router();

const { getMovies, uploadPhoto } = require("../controllers/movie.controller.js");
const multer = require("../middlewares/multer.js");

router.get("/", getMovies);

router.patch("/upload/:id", multer, uploadPhoto);

module.exports = router;
