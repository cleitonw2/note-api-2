const router = require("express").Router();

const UserController = require("../src/app/controllers/UserController");

router.post("/users/register", UserController.create);
router.post("/users/login", UserController.login);

module.exports = router;