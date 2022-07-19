require("dotenv").config();

const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.API_Key);
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3002;

app.post("/create_student", async (req, res) => {
  const { data, error } = await supabase
    .from("web-06-22")
    .insert([{ name: "Carlos", nickname: "CarlosS" }]);
  if (data) {
    res.send(data);
  }
  if (error) {
    res.send(error);
  }
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
