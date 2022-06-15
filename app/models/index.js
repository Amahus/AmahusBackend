const dbConfig = require("../config/db.config");
const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");

// Models
const Tutorial = require("./tutorial.model");
const User = require("./user.model");
const Profile = require("./profile.model");
const School = require("./school.model");
const Address = require("./address.model");
const Class = require("./class.model");
const SuperAdmin = require("./superadmin.model");
const Role = require("./role.model");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = Tutorial(sequelize, Sequelize);
db.schools = School(sequelize, Sequelize);
db.addresses = Address(sequelize, Sequelize);
db.classes = Class(sequelize, Sequelize);
db.profiles = Profile(sequelize, Sequelize);
db.superadmins = SuperAdmin(sequelize, Sequelize);
db.users = User(sequelize, Sequelize);
db.roles = Role(sequelize, Sequelize);

// user has a profile
db.users.hasOne(db.profiles, {
  foreignKey: {
    name: "userId",
    type: DataTypes.UUID,
  },
});
db.profiles.belongsTo(db.users);

// school has many users
db.schools.hasMany(db.users, {
  foreignKey: "schoolId",
});
db.users.belongsTo(db.schools);

// school has an address
db.schools.hasOne(db.addresses, {
  foreignKey: {
    name: "schoolId",
    type: DataTypes.UUID,
  },
});
db.addresses.belongsTo(db.schools);

// class has many users
db.classes.hasMany(db.users, {
  foreignKey: "classId",
});
db.users.belongsTo(db.classes);

// school has many classes
db.schools.hasMany(db.classes, {
  foreignKey: "schoolId",
});
db.classes.belongsTo(db.schools);

module.exports = db;
