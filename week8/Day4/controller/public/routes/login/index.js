const { response } = require("express");
const express = require("express");
const router = expess.Router();

router.use("/login", (req, res) => {
  res.sent("login");
});
