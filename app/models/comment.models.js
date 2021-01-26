module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    user_id_comment: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    comment_body: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    ref_post_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
    },
  });
  return Comment;
};
