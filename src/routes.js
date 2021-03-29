const router = require("express").Router();

const UserController = require("../src/app/controllers/UserController");
const NotesController = require("../src/app/controllers/NotesController");

const withAuth = require("./app/middlewares/auth");

router.post("/users/register", UserController.create);
router.post("/users/login", UserController.login);

router.put("/users", withAuth, UserController.update);
router.put("/users/password", withAuth, UserController.updatePassword);
router.delete("/users", withAuth, UserController.delete);

router.post("/notes", withAuth, NotesController.create);
router.get("/notes/search", withAuth, NotesController.search);
router.get("/notes/:id", withAuth, NotesController.index);
router.get("/notes", withAuth, NotesController.store);
router.put("/notes/:id", withAuth, NotesController.update);
router.delete("/notes/:id", withAuth, NotesController.delete);

module.exports = router;