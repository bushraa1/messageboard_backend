const db = require("../../models/db");
const Comment = db.comment;

exports.findOne = (req, res) => {
  const id = req.params.id;
  Comment.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
