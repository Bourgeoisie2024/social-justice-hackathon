const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/citizen_engagement", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const petitionSchema = new mongoose.Schema({
  title: String,
  description: String,
  signatures: Number,
});

const Petition = mongoose.model("Petition", petitionSchema);

app.get("/api/petitions", async (req, res) => {
  const petitions = await Petition.find();
  res.json(petitions);
});

app.post("/api/petitions", async (req, res) => {
  const newPetition = new Petition(req.body);
  await newPetition.save();
  res.status(201).json(newPetition);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
