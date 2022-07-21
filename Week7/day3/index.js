// default expess app is set to port 3000
const express = require("express");
const creds = require("./databaseConnection");
const app = express();
app.use(express.json());
const port = 3004;

app.get("/", (req, res) => {
  console.log(creds);
  creds.query("SELECT * FROM anime", (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(result.rows);
    }
  });
  console.log(req.body);
  res.send("Hello World!");
});
app.post("/create_anime", (req, res) => {
  console.log(req.body);
  creds.query(
    "INSERT INTO Anime (show, gengre, year) VALUES ($1, $2, $3)",
    [req.body.show, req.body.gengre, req.body.year],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});
app.post("/update", (req, res) => {
  console.log(req.body);
  creds.query(
    "UPDATE Anime SET show = $1, gengre = $2 WHERE id = $3",
    [req.body.show, req.body.gengre, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});
app.post("/del", (req, res) => {
  console.log(req.body);
  creds.query(
    "UPDATE Anime SET show = $1, gengre = $2 WHERE id = $3",
    [req.body.show, req.body.gengre, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
