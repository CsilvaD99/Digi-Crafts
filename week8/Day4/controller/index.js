const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");
const Loginroute = require("./public/routes/login");
const PORT = 3006;

app.use("/person", Loginroute);
