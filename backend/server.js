require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "welcome to mern app" });
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.URI)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
