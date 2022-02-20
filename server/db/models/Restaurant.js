const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Restaurant = db.define("Restaurant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  foodType: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
});

module.exports = Restaurant;
