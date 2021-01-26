const db = require("../../models/db");
const User = db.user;

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Account was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Account with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Account with id=" + id,
      });
    });
};
