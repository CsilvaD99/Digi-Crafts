"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Carlos",
          lastName: "Silva",
          email: "Carlos.silva.clss17@gmail.com",
          password: "12345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Joey",
          lastName: "Frasier",
          email: "JoeyFr@gmail.com",
          password: "54321",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
