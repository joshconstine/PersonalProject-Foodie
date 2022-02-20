const router = require("express").Router();
const { Restaurant } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.findAll();
    res.json(allRestaurants);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
