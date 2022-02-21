const router = require("express").Router();
const { Review } = require("../db");
const Reviews = require("../db/models/Review");
const Restaurant = require("../db/models/Restaurant");
const User = require("../db/models/User");

router.get("/", async (req, res, next) => {
  try {
    const allReviews = await Review.findAll();
    res.json(allReviews);
  } catch (error) {
    next(error);
  }
});
router.get("/:userId", async (req, res, next) => {
  try {
    const allReviews = await Review.findAll({
      where: {
        userId: req.params.userId,
      },
    });
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

    const user = await User.findOne({
      where: {
        username: createdReview.name,
      },
    });

    await restaurant.addReview(createdReview);
    await user.addReview(createdReview);

    await res.status(201).send(createdReview);
    // res.status(201).send(await Review.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
