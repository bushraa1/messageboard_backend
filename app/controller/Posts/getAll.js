const db = require("../../models/db");
const Posts = db.posts;

exports.findAll = (req, res) => {
  Posts.findAll({
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
