import express from "express";
import es6Renderer from "express-es6-template-engine";
const app = express();
const PORT = 3001;

//middle ware
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
app.use(express.static("/public"));
app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("hello from express!");
  const user = { name: "Carlos" };
  res.render("home", {
    locals: {
      user: user,
      teacher: "Joey",
      student: ["Amanda", "Carlos", "Blke"],
    },
  });
});

app.post("/home", (req, res) => {
  res.send("hello from express!");
});

app.get("/", (req, res) => {
  //   res.send("hello from express!");
  res.render("home");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
