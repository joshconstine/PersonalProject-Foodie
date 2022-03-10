const { faker } = require("@faker-js/faker");

function createRestaurant() {
  const name = faker.name.firstName();
  const image = faker.image.imageUrl(12345, 12345, "restaurant");
  return {
    name: name,
    imageUrl: image,
    foodType: "american",
  };
}

module.exports = createRestaurant;
