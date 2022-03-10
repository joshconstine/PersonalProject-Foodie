const { faker } = require("@faker-js/faker");

function createUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  // const password = faker.internet.password(10)
  const password = "123";

  return {
    firstName,
    lastName,
    email,
    password,
  };
}

module.exports = createUser;
