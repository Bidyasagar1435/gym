import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    currentWorkout: null,
    exercises: [],
    currentExercise: 0,
    workoutStarted: false,
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
      state.currentExercise = 0;
      state.currentWorkout = null;
      state.exercises = [];
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
} = workoutSlice.actions;
export default workoutSlice.reducer;
