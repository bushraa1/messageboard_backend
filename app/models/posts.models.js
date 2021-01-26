module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define("posts", {
    post_user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    user_name: {
      type: Sequelize.STRING,
    },
    post_title: {
      type: Sequelize.STRING,
    },
    post_body: {
      type: Sequelize.STRING,
    },
  });

  return Posts;
};
