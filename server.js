const express = require("express");
const bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./app/config/passport");

const db = require("./app/models/db");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "messageboard-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/users.routes.js")(app);
require("./app/routes/comment.routes")(app);
require("./app/routes/api-routes")(app);
require("./app/routes/posts.routes")(app);

// set port, listen for requests
db.sequelize.sync().then(function () {
  app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });
});
