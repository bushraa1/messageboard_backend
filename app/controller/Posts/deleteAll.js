const db = require("../../models/db");
const Posts = db.posts;

exports.deleteAll = (req, res) => {
  Posts.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Posts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
