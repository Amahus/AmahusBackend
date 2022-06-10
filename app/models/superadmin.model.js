module.exports = (sequelize, Sequelize) => {
  const SuperAdmin = sequelize.define("superadmin", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    adminId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
  });
  return SuperAdmin;
};
