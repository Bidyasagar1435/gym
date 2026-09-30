import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoritesSlice";
import userReducer from "./slices/userSlice";
import workoutReducer from "./slices/workoutSlice";

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    user: userReducer,
    workout: workoutReducer,
  },
});

export default store;
