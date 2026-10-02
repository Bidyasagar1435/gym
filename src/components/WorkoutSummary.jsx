import React from "react";
import { useSelector } from "react-redux";

const WorkoutSummary = () => {
  const { exercises, completedExercises } = useSelector(
    (state) => state.workout,
  );
  const totalExercise = exercises.length;
  const totalCompleted = completedExercises.length;
  return <div></div>;
};

export default WorkoutSummary;
