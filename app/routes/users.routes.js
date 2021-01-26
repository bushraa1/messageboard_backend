module.exports = (app) => {
  const createUser = require("../controller/Users/create.js");
  const getAllUsers = require("../controller/Users/getAll");
  const getOneUser = require("../controller/Users/getOne");
  const updateUser = require("../controller/Users/update");
  const deleteOneUser = require("../controller/Users/deleteOne");
  const deleteAllUsers = require("../controller/Users/deleteAll");

  // Create User
  app.post("/user", createUser.create);

  // Retrieve all Users
  app.get("/user", getAllUsers.findAll);

  // Retrieve a single User with UserId
  app.get("/user/:id", getOneUser.findOne);

  // Update User with UserId
  app.put("/user/:id", updateUser.update);

  // Delete an User with UserId
  app.delete("/user/:id", deleteOneUser.delete);

  // Delete all Users
  app.delete("/user", deleteAllUsers.deleteAll);
};
