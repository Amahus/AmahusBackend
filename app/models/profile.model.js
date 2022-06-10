module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    nesehaAbat: {
      type: Sequelize.STRING,
    },
    department: {
      type: Sequelize.STRING,
    },
    className: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.STRING,
    },
    profilePicture: {
      type: Sequelize.STRING,
    },
  });
  return Profile;
};
