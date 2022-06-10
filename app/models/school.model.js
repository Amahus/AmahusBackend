module.exports = (sequelize, Sequelize) => {
  const School = sequelize.define("school", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    schoolName: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    class: {
      type: Sequelize.STRING,
    },
    adminId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
  });
  return School;
};
