//this is the access point for all things database related!

const db = require("./db");
const Restaurant = require("./models/Restaurant");
const Review = require("./models/Review");

const User = require("./models/User");

//associations could go here!

Restaurant.hasMany(Review);
Review.belongsTo(Restaurant);

module.exports = {
  db,
  models: {
    User,
  },
  Restaurant,
  Review,
};
