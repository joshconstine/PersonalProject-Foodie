"use strict";

const { db, Restaurant, Review, User } = require("../server/db");
const createUser = require("./userCreator");
const createReviews = require("./reviewCreator");
const createRestaurant = require("./restaurantCreator");
const scrapeRestaurant = require("./scrapers");

const userAmount = 20;

var restaurants = [
  {
    name: "Mac Shack",

    imageUrl:
      "https://retailerreportcard.com/wp-content/uploads/2018/09/logo-large-mcdonalds.png",
    foodType: "american",
  },
  {
    name: "T Bell",
    imageUrl:
      "https://locations.tacobell.com/permanent-b0b701/assets/images/TBUS_Logo.7bd20747.svg",
    foodType: "mexican",
  },
  {
    name: "Culvers",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZLGfH7vXYyXrKJCB6Vd9JUpjBHhJawsbDg&usqp=CAU",
    foodType: "american",
  },
  {
    name: "In-N-OUT",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/InNOut_2021_logo.svg/1200px-InNOut_2021_logo.svg.png",
    foodType: "american",
  },
  {
    name: "Chick-Fil-A",
    imageUrl:
      "http://www.chick-fil-a.com/-/media/images/cfacom/default-images/chick-fil-a-logo-vector.ashx",
    foodType: "american",
  },
  {
    name: "Arbys",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Arby%27s_logo.svg/1200px-Arby%27s_logo.svg.png",
    foodType: "american",
  },
];

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  await Promise.all(
    restaurants.map((restaurant) => {
      return Restaurant.create(restaurant);
    })
  );
  const testRestaurant = await Restaurant.create(createRestaurant());
  console.log(`restaurants seeded successfully`);
  await testUserSeed();
  await userSeed();
  await restaurantSeed();

  console.log(`seeded ${userAmount} users`);
  console.log(`users seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

const restaurantSeed = async (city, state) => {
  // const fetchedRestaurants = await scrapeRestaurant("green+bay", "wi");
  const fetchedRestaurants = await scrapeRestaurant(city, state);
  await Promise.all(
    fetchedRestaurants.map((restaurant) => {
      return Restaurant.create(restaurant);
    })
  );
};

const userSeed = async () => {
  const reviewsPerPerson = 3;

  for (let i = 0; i < userAmount; i++) {
    const user = await User.create(createUser());
    const reviews = await createReviews(reviewsPerPerson, user.firstName);
    reviews.map((review) => {
      return Review.create(review);
    });

    var mcDonalds = await Restaurant.findOne({
      where: {
        name: "Mac Shack",
      },
    });
    const allReviews = await Review.findAll();
    // console.log(allReviews);

    for (let j = 1; j < reviewsPerPerson; j++) {
      let currentReview = await Review.findOne({
        where: {
          id: i * reviewsPerPerson + j,
        },
      });

      await mcDonalds.addReview(currentReview);
    }
  }
};

const testUserSeed = async () => {
  const users = await Promise.all([
    User.create({
      firstName: "alyssia",
      lastName: "constine",
      password: "brandy",
      email: "aly@gmail.com",
      photo:
        "http://static1.squarespace.com/static/5fd80c30dba154430f787273/t/603edd7be40c807aea22ccb5/1614732672694/branding+and+web+design+company+owner+banner+for+her+website.jpg?format=1500w",
    }),
  ]);

  const reviews = await Promise.all([
    Review.create({
      name: "Alyssia",
      text: "this place is stingey with the hot sauce",
      rating: 4,
    }),
    Review.create({
      name: "alyssia",
      text: "This place screwed up my order, forgot my apple pie",
      rating: 3,
    }),
  ]);

  var mcDonalds = await Restaurant.findOne({
    where: {
      name: "Mac Shack",
    },
  });
  const tbell = await Restaurant.findOne({
    where: {
      name: "T Bell",
    },
  });

  const alyReview = await Review.findOne({
    where: {
      name: "Alyssia",
    },
  });
  const alyReview2 = await Review.findOne({
    where: {
      name: "alyssia",
    },
  });

  const aly = await User.findOne({
    where: {
      firstName: "alyssia",
    },
  });

  await userSeed();
  await mcDonalds.addReview(alyReview2);
  await tbell.addReview(alyReview);
  await aly.addReview(alyReview);
  await aly.addReview(alyReview2);
};

module.exports = { seed, restaurantSeed };
