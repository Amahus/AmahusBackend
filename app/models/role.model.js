module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    roleType: {
      type: Sequelize.STRING,
    },
    roleDescription: {
      type: Sequelize.STRING,
    },
  });
  return Role;
};
