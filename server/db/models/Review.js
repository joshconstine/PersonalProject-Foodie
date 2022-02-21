const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Review = db.define("Review", {
  name: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Review;
