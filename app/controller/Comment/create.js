const db = require("../../models/db");
const Comment = db.comment;
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const comment = {
    user_id_comment: req.body.user_id_comment,
    comment_body: req.body.comment_body,
    name: req.body.name,
    ref_post_id: req.body.ref_post_id,
  };
  console.log(comment);

  // Save Message in the database
  Comment.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
