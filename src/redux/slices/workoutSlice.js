import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    currentWorkout: null,
    exercises: [],
    currentExercise: 0,
    workoutStarted: false,
    completedExercises: [],
    workoutFinished: false,
    resetWorkout: false
  },
  reducers: {
    setWorkout: (state, action) => {
      state.currentWorkout = action.payload;
    },
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
    startWorkout: (state) => {
      state.workoutStarted = true;
      state.currentExercise = 0;
      state.workoutFinished = false;
    },
    nextExercise: (state) => {
      if (state.currentExercise < state.exercises.length - 1) {
        state.currentExercise += 1;
      }
    },
    prevExercise: (state) => {
      if (state.currentExercise > 0) {
        state.currentExercise -= 1;
      }
    },
    selectExercise: (state, action) => {
      const exercise = action.payload;

      const alreadySelected = state.exercises.some(
        (item) => item.name === exercise.name,
      );

      if (!alreadySelected) {
        state.exercises.push(exercise);
      }
    },
    finishWorkout: (state) => {
      state.workoutStarted = false;
      state.workoutFinished = true;
    },
    completExercise: (state) => {
      const exercise = state.exercises[state.currentExercise];

      if (!exercise) return;

      const alreadyCompleted = state.completedExercises.some(
        (item) => item.name === exercise.name,
      );
      if (!alreadyCompleted) {
        state.completedExercises.push(exercise);
      }
    },
    resetWorkout: (state) => {
      state.currentWorkout = null;
      state.exercises = [];
      state.currentExercise = 0;
      state.workoutStarted = false;
      state.completedExercises = [];
      state.workoutFinished = false;
    },
  },
});

export const {
  setWorkout,
  setExercises,
  startWorkout,
  nextExercise,
  prevExercise,
  selectExercise,
  finishWorkout,
  completExercise,
  resetWorkout
} = workoutSlice.actions;
export default workoutSlice.reducer;
