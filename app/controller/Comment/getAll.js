const db = require("../../models/db");
const Comment = db.comment;

exports.findAll = (req, res) => {
  Comment.findAll({
    where: {},
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
