const db = require("../../models/db");
const Posts = db.posts;

exports.findOne = (req, res) => {
  const id = req.params.id;
  Posts.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
