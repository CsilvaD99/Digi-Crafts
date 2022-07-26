const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3007;
const petsroutes = require("./routes/pets");
//midleware
app.use(express.json());
app.use(cors());
//
app.use("/pets", petsroutes);

app.listen(PORT, console.log(`listening on ${PORT}`));
