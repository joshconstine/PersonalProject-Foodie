const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Restaurants = db.define("Restaurants", {
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

module.exports = Restaurants;
