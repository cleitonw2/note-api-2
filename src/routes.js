const router = require("express").Router();

const UserController = require("../src/app/controllers/UserController");

const withAuth = require("./app/middlewares/auth");

router.post("/users/register", UserController.create);
router.post("/users/login", UserController.login);

router.put("/users", withAuth, UserController.update);
router.put("/users/password", withAuth, UserController.updatePassword);
router.delete("/users", withAuth, UserController.delete);


module.exports = router;