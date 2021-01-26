const db = require("../../models/db");
const Comment = db.comment;

exports.delete = (req, res) => {
  const id = req.params.id;

  Comment.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Message was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Message request with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
