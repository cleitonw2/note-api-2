const router = require("express").Router();

const UserController = require("./controllers/UserController");

router.use("/users/register", UserController.create);

module.exports = router;