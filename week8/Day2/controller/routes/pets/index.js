const express = require("express");
const router = express.Router();
const { Pets } = require("../../../sequelize/models");

router.get("/get_pets", async (req, res) => {
  const PetsWant = await Pets.findAll();
  console.log(PetsWant);

  res.render("pets", { locals: { title: PetsWant } });
});
router.post("/create_pets", async (req, res) => {
  res.send("pets created");
});
router.put("/update_pets", async (req, res) => {
  res.send("pets updated");
});
router.delete("/delete_pets", async (req, res) => {
  res.send("pet obliterated");
});

module.exports = router;
