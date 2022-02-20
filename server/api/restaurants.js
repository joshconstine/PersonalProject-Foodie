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

router.get("/:id", async (req, res, nexy) => {
  try {
    const singleRestaurant = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(singleRestaurant);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
