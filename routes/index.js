const router = require("express").Router();
const bodyParser = require("body-parser");

const authRoute = require("./auth.route.js");
const userRoute = require("./user.route.js");
const movieRoute = require("./movie.route.js");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

router.use("/auth", authRoute);

router.use("/users", userRoute);

router.use("/movies", movieRoute);

module.exports = router;
