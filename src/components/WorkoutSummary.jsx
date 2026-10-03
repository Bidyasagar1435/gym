import { resetWorkout } from "@/redux/slices/workoutSlice";
import { ArrowLeft, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WorkoutSummary = () => {
  const navigate = useNavigate();
  const { exercises, completedExercises } = useSelector(
    (state) => state.workout,
  );
  const dispatch = useDispatch();

  const totalExercise = exercises.length;
  const totalCompleted = completedExercises.length;
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <button onClick={()=> dispatch(resetWorkout())} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-700/30 transition-colors duration-500">
          <X size={30} className="text-slate-800 hover:text-slate-500 transition-all duration-500" />

        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Workout Completed 🎉</h1>

          <p className="mt-3 text-slate-400">
            Great job! You completed your workout.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-sm text-slate-400">Total Exercises</p>

            <h2 className="mt-2 text-3xl font-bold">{totalExercise}</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-sm text-slate-400">Completed</p>

            <h2 className="mt-2 text-3xl font-bold text-green-400">
              {totalCompleted}
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-sm text-slate-400">Completion</p>

            <h2 className="mt-2 text-3xl font-bold text-purple-400">
              {totalExercise > 0
                ? Math.round((totalCompleted / totalExercise) * 100)
                : 0}
              %
            </h2>
          </div>
          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-bold">Completed Exercises</h2>

            <div className="space-y-4">
              {completedExercises.map((exercise) => (
                <div
                  key={exercise.name}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                >
                  <h3 className="font-semibold text-white">{exercise.name}</h3>

                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-400">
                    <span>Muscle: {exercise.muscle}</span>
                    <span>Difficulty: {exercise.difficulty}</span>
                    <span>Type: {exercise.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutSummary;
