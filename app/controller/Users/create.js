const db = require("../../models/db");
const User = db.user;

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create Account
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  console.log(user);
  // Save Account in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
