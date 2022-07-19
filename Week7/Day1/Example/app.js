import express from "express";
import * as cowsay from "cowsay";
const app = express();
const PORT = 3000;
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send("this is the home page");
});
app.get("/benji", (req, res) => {
  res.send("Lizard");
});
app.post("/beer", (req, res) => {
  console.log(req);
  res.send("beer");
});
app.post("/create_user", (req, res) => {
  res.send(`Created user ${req.body.discplayer}`);
});

app.get("/cow", (req, res) => {
  res.send(
    cowsay.say({
      text: "I'm a moooodule",
    })
  );
});
app.listen(PORT, console.log(`listening on port ${PORT}`));
