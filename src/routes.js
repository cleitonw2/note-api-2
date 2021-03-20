const router = require("express").Router();

const UserController = require("./controllers/UserController");

router.post("/users/register", UserController.create);
router.post("/users/login", UserController.login);

module.exports = router;