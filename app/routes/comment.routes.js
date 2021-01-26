module.exports = (app) => {
  const createComment = require("../controller/Comment/create.js");
  const getAllComments = require("../controller/Comment/getAll");
  const getOneComment = require("../controller/Comment/getOne");
  const updateComment = require("../controller/Comment/update");
  const deleteOneComment = require("../controller/Comment/deleteOne");
  const deleteAllComment = require("../controller/Comment/deleteAll");

  // Create Comment
  app.post("/comment", createComment.create);

  // Retrieve all Comment
  app.get("/comment", getAllComments.findAll);

  // Retrieve a single Comment with CommentId
  app.get("/comment/:id", getOneComment.findOne);

  // Update Comment with CommentId
  app.put("/comment/:id", updateComment.update);

  // Delete a Comment with CommentId
  app.delete("/comment/:id", deleteOneComment.delete);

  // Delete all Comment
  app.delete("/comment", deleteAllComment.deleteAll);
};
