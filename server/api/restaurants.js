const router = require("express").Router();
const { Restaurant, Review } = require("../db");
const Reviews = require("../db/models/Review");

router.get("/", async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.findAll();

    res.json(allRestaurants);
  } catch (error) {
    next(error);
  }
});

router.put("/:cityName/:stateName", async (req, res, next) => {
  try {
    console.log(req.params.cityName, req.params.stateName);
    res.json("hello world");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, nexy) => {
  try {
    const singleRestaurant = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Reviews }],
    });
    res.json(singleRestaurant);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
