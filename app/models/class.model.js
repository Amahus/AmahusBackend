module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    className: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    classRole: {
      type: Sequelize.STRING,
    },
  });
  return Class;
};
