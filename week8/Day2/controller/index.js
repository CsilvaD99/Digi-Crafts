const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3007;
const petsroutes = require("./routes/pets");
const es6Renderer = require("express-es6-template-engine");
//midleware
app.use(express.json());
app.use(cors());
app.use(express.static(`public`));
app.engine("html", es6Renderer);
app.set("views", "./public/views");
app.set("view engine", "html");
//
app.use("/pets", petsroutes);

app.listen(PORT, console.log(`listening on ${PORT}`));
