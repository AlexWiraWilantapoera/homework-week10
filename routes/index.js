const router = require("express").Router();
const bodyParser = require("body-parser");

const userRoute = require("./user.route.js");
const movieRoute = require("./movie.route.js");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

router.use("/users", userRoute);

router.use("/movies", movieRoute);

module.exports = router;
