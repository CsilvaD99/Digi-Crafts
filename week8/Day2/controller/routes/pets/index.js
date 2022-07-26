const express = require("express");
const router = express.Router();

router.get("/get_pets", async (req, res) => {
  res.send("get pets");
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
