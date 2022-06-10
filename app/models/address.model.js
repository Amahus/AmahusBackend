module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
  });
  return Address;
};
