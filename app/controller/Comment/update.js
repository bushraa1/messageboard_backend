const db = require("../../models/db");
const Comment = db.comment;

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      comment_body: "Comment can not be empty!",
    });
  }
  const id = req.params.id;
  Comment.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Comment updated successfully.",
        });
      } else {
        res.send({
          message: "Cannot update comment with id:" + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
