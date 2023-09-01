const express = require("express");
const router = express.Router();
const {
  getAllWorkouts,
  getSingeWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

router.get("/", getAllWorkouts);
router.get("/:id", getSingeWorkout);
router.post("/", createWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

module.exports = router;
