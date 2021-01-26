const db = require("../../models/db");
const User = db.user;

exports.findAll = (req, res) => {
  User.findAll({
    where: {},
  })
    .then((data) => {
      if (!data) {
        res.send({
          message:
            "Can't find any users with that user role id" + req.params.userid,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving accounts",
      });
    });
};
