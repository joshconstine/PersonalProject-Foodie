"use strict";

const { db, Restaurant, Review, User } = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  var restaurants = [
    {
      id: 1,
      name: "Mac Shack",
      imageUrl: "/images/r2d2.png",
      foodType: "american",
    },
    {
      id: 2,
      name: "Taco Bell",
      imageUrl: "/images/walle.jpeg",
      foodType: "mexican",
    },
    {
      id: 3,
      name: "Culvers",
      imageUrl: "/images/walle.jpeg",
      foodType: "american",
    },
  ];

  await Promise.all(
    restaurants.map((restaurant) => {
      return Restaurant.create(restaurant);
    })
  );
  console.log(`restaurants seeded successfully`);
  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  const reviews = await Promise.all([
    Review.create({
      name: "cody",
      text: "this place is bussing, CPD through the roof",
      rating: 5,
    }),
  ]);

  const mcDonalds = await Restaurant.findOne({
    where: {
      name: "Mac Shack",
    },
  });
  const codiesReview = await Review.findOne({
    where: {
      name: "cody",
    },
  });

  const cody = await User.findOne({
    where: {
      username: "cody",
    },
  });

  await mcDonalds.addReview(codiesReview);
  await cody.addReview(codiesReview);

  console.log(`seeded ${users.length} users`);
  console.log(`users seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
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

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
