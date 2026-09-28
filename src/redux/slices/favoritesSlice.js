const { createSlice } = require("@reduxjs/toolkit");

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
  },
});
