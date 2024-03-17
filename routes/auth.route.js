const router = require("express").Router();

const { login } = require("../controllers/auth.controller.js");

router.post("/login", login);

module.exports = router;
