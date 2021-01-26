const db = require("../../models/db");
const Posts = db.posts;

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create Post
  const post = {
    post_user_id: req.body.post_user_id,
    user_name: req.body.user_name,
    post_title: req.body.post_title,
    post_body: req.body.post_body,
  };

  // Save Post in the database
  Posts.create(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
