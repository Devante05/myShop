const router = require("express").Router();
const postRoutes = require("./postsRouter");
const userRoutes = require("./user");


// Post routes
router.use("/postsRouter", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
