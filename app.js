const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nimalamysql2024",
  database: "citizen_engagement",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Citizen Engagement Platform");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
