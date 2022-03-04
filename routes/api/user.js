const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/posts"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;