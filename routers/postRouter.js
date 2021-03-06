const express = require("express");
const postControllers = require("../controllers/postControllers");
const upload = require("../utils/multer");
const { isAuth } = require("../utils/utils");

const postRouter = express.Router();

postRouter.post("/insertPost", postControllers.insertPost);
postRouter.put("/updatePost/:id", isAuth, postControllers.updatePost);
postRouter.get("/getPosts/:postType?", postControllers.getPosts);
postRouter.get("/getPost/:id", postControllers.getPostById);
postRouter.delete(
  "/deletePostById/:id",
  isAuth,
  postControllers.deletePostById
);

module.exports = postRouter;
