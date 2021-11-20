const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const view = require("./routes/view");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
// const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// const databaseUrl = "fitnessDB";
// const collections = ["excercises"];


app.use("/api", apiRoutes);
app.use("/", view);

app.listen(PORT, () => {
    console.log("App running on port 3000!");
  });
  