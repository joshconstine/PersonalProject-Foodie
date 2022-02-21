const router = require("express").Router();
const { Review } = require("../db");
const Reviews = require("../db/models/Review");
const Restaurant = require("../db/models/Restaurant");

router.get("/", async (req, res, next) => {
  try {
    const allReviews = await Review.findAll();
    res.json(allReviews);
  } catch (error) {
    next(error);
  }
});

router.post("/:restaurantId", async (req, res, next) => {
  try {
    console.log(req.params.restaurantId);
    const id = req.params.restaurantId;
    const createdReview = await Review.create(req.body);

    const restaurant = await Restaurant.findOne({
      where: {
        id: id,
      },
    });

    await restaurant.addReview(createdReview);
    console.log(restaurant);
    res.status(201).send(createdReview);
    // res.status(201).send(await Review.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
