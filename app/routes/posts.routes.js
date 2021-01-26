module.exports = (app) => {
  const createPost = require("../controller/Posts/create.js");
  const getAllPost = require("../controller/Posts/getAll");
  const getOnePost = require("../controller/Posts/getOne");
  const updatePost = require("../controller/Posts/update");
  const deleteOnePost = require("../controller/Posts/deleteOne");
  const deleteAllPost = require("../controller/Posts/deleteAll");

  //Create Post
  app.post("/create/post", createPost.create);

  // Retrieve all Post
  app.get("/post", getAllPost.findAll);

  // Retrieve a single Post with PostId
  app.get("/post/:id", getOnePost.findOne);

  // Update Post with PostId
  app.put("/post/:id", updatePost.update);

  // Delete Post with PostId
  app.delete("/post/:id", deleteOnePost.delete);

  // Delete all Post
  app.delete("/post", deleteAllPost.deleteAll);
};
