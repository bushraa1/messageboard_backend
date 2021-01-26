const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.models")(sequelize, Sequelize);
db.comment = require("./comment.models")(sequelize, Sequelize);
db.posts = require("./posts.models")(sequelize, Sequelize);

db.users.hasMany(db.comment, { foreignKey: "user_id_comment" });
db.users.hasMany(db.posts, { foreignKey: "post_user_id" });
db.posts.hasMany(db.comment, { foreignKey: "ref_post_id" });

module.exports = db;
