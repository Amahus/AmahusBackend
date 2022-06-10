module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    fullName: {
      type: Sequelize.STRING,
    },
    kristinaSime: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    profileId: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    batch: {
      type: Sequelize.STRING,
    },
    schoolId: {
      type: Sequelize.STRING,
    },
  });
  return User;
};
