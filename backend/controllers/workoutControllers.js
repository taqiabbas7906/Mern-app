const Workout = require("../models/workoutSchema");
const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

const getSingeWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Valid Id" });
  }
  const workout = await Workout.findById({ _id: id });
  if (!workout) {
    res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json(workout);
};

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getSingeWorkout,
  deleteWorkout,
  updateWorkout,
};
