const router = require("express").Router();

const { authenticate, authorize } = require("../middlewares/auth.js");
const { getUsers, getUserDetail, addUsers, updateUsers, removeUsers } = require("../controllers/user.controller.js");

router.get("/", getUsers);

router.get("/:id", getUserDetail);

router.post('/add', addUsers);

router.use(authenticate);

router.put('/update/:id', updateUsers);

router.delete('/delete/:id', authorize, removeUsers);

module.exports = router;
