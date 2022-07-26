const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { client } = require("./models");
const PORT = 3008;
const router = express.Router();

app.use(express.json());
// {
//     "username": "Carlost",
//     "password": "silvac"
// }
const userRoutes = require("./user");
const restaurantsRoutes = require("./restaurants");

app.use("/user", userRoutes);
app.use("/restaurants", restaurantsRoutes);

app.post("/create_user", async (req, res) => {
  const { username, password } = req.body;

  console.log(password);
  try {
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("hashedPassword", hashedPassword);
    const encryptedUser = {
      username: username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const createUser = await client.create(encryptedUser);
    console.log(createUser);

    console.log(salt);
  } catch (error) {
    console.log(error);
  }
  console.log(req.body);
  res.send("create user");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await client.findOne({
      where: {
        username: username,
      },
    });
    const clientwefound = findUser.dataValues;

    console.log(clientwefound.password);
    const validated = await bcrypt.compare(password, clientwefound.password);
    console.log(validated);
    if (!validated) {
      res.send("Error");
    } else {
      res.status(200).send("Success");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/update", async (req, res) => {
  const { username, password, new_password } = req.body;
  try {
    const findUser = await client.findOne({
      where: {
        username: username,
      },
    });
    const clientwefound = findUser.dataValues;

    console.log(clientwefound.password);
    const validated = await bcrypt.compare(password, clientwefound.password);
    console.log(validated);
    if (!validated) {
      res.send("Current password is incorrect");
    } else {
      await clientwefound.update({ password: new_password });
      await clientwefound.save();
      res.status(200).send("Success");
      console.log(password);
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete_password", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await client.findOne({
      where: {
        username: username,
      },
    });
    const clientwefound = findUser.dataValues;

    console.log(clientwefound.password);
    const validated = await bcrypt.compare(password, clientwefound.password);
    console.log(validated);
    if (!validated) {
      res.send("Error");
    } else {
      res.status(200).send("Success");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
