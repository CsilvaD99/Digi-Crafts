const express = require("express");
const { User } = require("./models/");
const app = express();
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  console.log(User);
  const users = await User.findAll();
  res.send(users);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
