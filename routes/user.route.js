const router = require("express").Router();

const { getUsers, addUsers, updateUsers, removeUsers } = require("../controllers/user.controller.js");

router.get("/", getUsers);

router.post('/add', addUsers);

router.put('/update/:id', updateUsers);

router.delete('/delete/:id', removeUsers);

module.exports = router;
