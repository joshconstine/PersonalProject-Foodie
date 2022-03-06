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

      imageUrl:
        "https://retailerreportcard.com/wp-content/uploads/2018/09/logo-large-mcdonalds.png",
      foodType: "american",
    },
    {
      id: 2,
      name: "T Bell",
      imageUrl:
        "https://locations.tacobell.com/permanent-b0b701/assets/images/TBUS_Logo.7bd20747.svg",
      foodType: "mexican",
    },
    {
      id: 3,
      name: "Culvers",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZLGfH7vXYyXrKJCB6Vd9JUpjBHhJawsbDg&usqp=CAU",
      foodType: "american",
    },
    {
      id: 4,
      name: "In-N-OUT",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/InNOut_2021_logo.svg/1200px-InNOut_2021_logo.svg.png",
      foodType: "american",
    },
    {
      id: 5,
      name: "Chick-Fil-A",
      imageUrl:
        "http://www.chick-fil-a.com/-/media/images/cfacom/default-images/chick-fil-a-logo-vector.ashx",
      foodType: "american",
    },
    {
      id: 6,
      name: "Arbys",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Arby%27s_logo.svg/1200px-Arby%27s_logo.svg.png",
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
    User.create({
      username: "cody",
      password: "123",
      photo:
        "https://yt3.ggpht.com/ytc/AKedOLTZB4vkQIj98TFZfy5A9SltkiQDRb2ka_eNkump=s900-c-k-c0x00ffffff-no-rj",
    }),
    User.create({ username: "murphy", password: "123", photo: "" }),
    User.create({
      username: "alyssia",
      password: "brandy",
      photo:
        "http://static1.squarespace.com/static/5fd80c30dba154430f787273/t/603edd7be40c807aea22ccb5/1614732672694/branding+and+web+design+company+owner+banner+for+her+website.jpg?format=1500w",
    }),
  ]);

  const reviews = await Promise.all([
    Review.create({
      name: "cody",
      text: "this place is bussing, CPD through the roof",
      rating: 5,
    }),
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

  const mcDonalds = await Restaurant.findOne({
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
  const aly = await User.findOne({
    where: {
      username: "alyssia",
    },
  });

  await mcDonalds.addReview(codiesReview);
  await mcDonalds.addReview(alyReview2);
  await tbell.addReview(alyReview);
  await cody.addReview(codiesReview);
  await aly.addReview(alyReview);
  await aly.addReview(alyReview2);

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
