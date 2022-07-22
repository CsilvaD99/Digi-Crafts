const express = require("express");
const { User, Longboard, Order } = require("../database/models");
const app = express();
const PORT = 3009;

//middleware
app.use(express.json());

//crud
app.post("/user", async (req, res) => {
  //   try {
  //     const user = await User.create({
  //       firstName: "Super",
  //       lastName: "Mario",
  //       email: "plumber@mario.com",
  //       password: "Peach",
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     });
  //     res.status(200).send(user);
  //   } catch (error) {
  //     res.status(400), send(error);
  //   }
});

app.post("/longboard", (req, res) => {
  res.send("longboard");
});
app.post("/order", (req, res) => {
  res.send("order");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
