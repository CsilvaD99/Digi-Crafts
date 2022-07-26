const { client } = require("../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/all_users", async (req, res) => {
  const usersToGet = await client.findAll();
  res.send(usersToGet);
});
module.exports = router;
router.get("/by_id/:id", async (req, res) => {
  const { id } = req.params;
  const usersToGet = await client.findAll({
    where: {
      id: id,
    },
  });
  res.send(usersToGet);
});
