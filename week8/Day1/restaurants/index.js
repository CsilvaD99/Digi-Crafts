const { Restaurants } = require("../models");
const express = require("express");
const client = require("../models/client");
const { Router } = require("express");
const router = express.Router();
const app = express();

app.use(express.json());

router.post("/create_restaurants", async (req, res) => {
  const { name, address, reviewScore } = req.body;

  console.log(name);
  console.log(address);
  console.log(reviewScore);
  try {
    const newRestaurant = {
      name: name,
      address: address,
      reviewScore: reviewScore,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const createRes = await Restaurants.create(newRestaurant);
    console.log(createRes);

    console.log(NewRestaurant);
  } catch (error) {
    console.log(error);
  }
  console.log(req.body);
  res.send("create user");
});

router.get("/find_restaurant/:id", async (req, res) => {
  const { id } = req.params;
  const findRestaurants = await Restaurants.findOne({
    where: {
      id: id,
    },
  });
  res.send(findRestaurants);
});

router.get("/restaurant_by_name/:name", async (req, res) => {
  const { name } = req.params;
  const nameRestaurant = await Restaurants.findOne({
    where: {
      name: name,
    },
  });
  res.send(nameRestaurant);
});
router.get("/restaurant_by_address/:address", async (req, res) => {
  const { address } = req.params;
  const addyRestaurant = await Restaurants.findAll({
    where: {
      address: address,
    },
  });
  res.send(addyRestaurant);
});

router.put("/restaurant_new_name", async (req, res) => {
  const { id, name } = req.body;
  const Restaurantgetid = await Restaurants.findOne({
    where: {
      id: id,
    },
  });
  Restaurantgetid.update({
    name: name,
    updatedAt: new Date(),
  });
  res.send(Restaurantgetid);
});

router.delete("/delete_restaurant", async (req, res) => {
  const { id } = req.body;
  const IdRestaurant = await Restaurants.findOne({
    where: {
      id: id,
    },
  });
  IdRestaurant.destroy({
    where: {
      id: id,
    },
  });
  res.send(IdRestaurant);
});
router.delete("/name_delete", async (req, res) => {
  const { name } = req.body;
  const nameRestaurant = await Restaurants.findOne({
    where: {
      name: name,
    },
  });
  nameRestaurant.destroy({
    where: {
      name: name,
    },
  });
});
module.exports = router;
