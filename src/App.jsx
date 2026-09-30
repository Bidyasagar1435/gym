import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exercises from "./Pages/Exercise/Exercises";
import ExerciseDetails from "./Pages/Exercise/ExerciseDetails";
import Trainers from "./Pages/Trainer/Trainers";
import TrainerDetails from "./Pages/Trainer/TrainerDetails";
import FavoriteExercise from "./Pages/FavoriteExercise";
import Login from "./Pages/Login";
import Workout from "./Pages/Dashboard/Workout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/:name" element={<ExerciseDetails />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainers/:slug" element={<TrainerDetails />} />
        <Route path="/favorite-exercises" element={<FavoriteExercise />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/workout"
          element={
            <ProtectedRoute>
              <Workout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
