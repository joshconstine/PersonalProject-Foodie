const { faker } = require("@faker-js/faker");

function createReviews(num, name) {
  const reviews = [];
  for (let i = 0; i < num; i++) {
    reviews.push({
      name: name,
      text: faker.commerce.productAdjective(),
      rating: 0,
    });
  }
  return reviews;
}

module.exports = createReviews;
