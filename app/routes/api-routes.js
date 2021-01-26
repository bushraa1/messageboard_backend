// Requiring our models and passport as we've configured it
var db = require("../models/db");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, return its Userrole and id
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate("local"), function (req, res) {
    res.json({
      id: req.user.id,
      name: req.user.name,
    });
  });
  //
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/signup", function (req, res) {
    db.users
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      .then((data) => {
        res.send(data);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });
  //
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.send({
      message: "You've susccessfully logged out",
    });
  });
};
