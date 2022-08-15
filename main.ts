const express = require("express");
const app = express();

const mongoose = require("mongoose");
app.use(express.json());

//DB connection
mongoose.connect(
  "mongodb+srv://Vahe27:Qwerty1234)@cluster0.7qpjgen.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected to DB");
    } else {
      console.log("error");
    }
  }
);

const sch = {
  name: String,
  region: String,
  country: String,
  numberrange: Number,
};

const monmodel = mongoose.model("users", sch);

//POST

app.post("/post", async (req, res) => {
  console.log("Inside post function");
  const data = new monmodel({
    name: req.body.name,
    region: req.body.region,
    country: req.body.country,
    numberrange: req.body.numberrange,
  });

  const val = await data.save();
  res.send("posted");
});

//LISTEN

app.listen(3000, () => {
  console.log("Server is on port 3000");
});

