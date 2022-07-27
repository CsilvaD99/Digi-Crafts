"use strict";

const { query } = require("express");

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
      "Pets",
      [
        {
          name: "Benji",
          species: "bearded Dragon",
          age: 3,
          weight: "2",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Amanda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dog",
          species: "Dog",
          age: 6,
          weight: "70",
          health: "Good",
          unitOfWeight: "lbs",
          owner: "Person",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tiny",
          species: "dog",
          age: 5,
          weight: "1000",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Joe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pikachu",
          species: "mouse",
          age: 20,
          weight: "5",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Ash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ginger",
          species: "cat",
          age: 5,
          weight: "12",
          health: "good",
          unitOfWeight: "lbs",
          owner: "Chad",
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
  },
};
