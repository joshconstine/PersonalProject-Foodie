const router = require("express").Router();
const { Restaurants } = require("../db");

// GET   /api/robots
router.get("/", async (req, res, next) => {
  try {
    const allRobots = await Robot.findAll({
      include: [{ model: Projects }],
    });
    res.json(allRobots);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
