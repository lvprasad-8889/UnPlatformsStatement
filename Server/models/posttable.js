module.exports = (sequelize, Sequelize) => {
  const posttable = sequelize.define("posttable", {
    views: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    likes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comments: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    shares: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return posttable;
};
