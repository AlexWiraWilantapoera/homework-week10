const router = require("express").Router();

const userRoute = require("./user.route");
const movieRoute = require("./movie.route");

router.use("/users", userRoute);

router.use("/movies", movieRoute);

module.exports = router;
