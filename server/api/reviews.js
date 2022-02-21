const router = require("express").Router();
const { Review } = require("../db");
const Reviews = require("../db/models/Review");

router.get("/", async (req, res, next) => {
  try {
    const allReviews = await Review.findAll();
    res.json(allReviews);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Review.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
