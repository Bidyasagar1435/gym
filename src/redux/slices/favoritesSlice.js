import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    data: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const exercise = action.payload;

      const existingExercise = state.data.find(
        (exer) => exer.name === exercise.name,
      );
      if (!existingExercise) {
        state.data.push(exercise);
      }
    },
    removeFromFavorite: (state, action) => {
      state.data = state.data.filter(
        (exercise) => exercise.name !== action.payload,
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
