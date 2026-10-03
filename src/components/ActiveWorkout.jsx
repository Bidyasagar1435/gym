import {
  completExercise,
  finishWorkout,
  nextExercise,
  prevExercise,
  resetWorkout,
} from "@/redux/slices/workoutSlice";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Flame,
  RotateCcw,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const ActiveWorkout = () => {
  const { currentExercise, workoutStarted, exercises, completedExercises } =
    useSelector((state) => state.workout);
  const dispatch = useDispatch();

  const exercise = exercises[currentExercise];
  const isCompleted = completedExercises.some(
    (item) => item.name === exercise.name,
  );
  const totalExercises = exercises.length;
  const isLastExercise = currentExercise === totalExercises - 1;

  const progress =
    totalExercises > 0 ? (currentExercise + 1 / totalExercises) * 100 : 0;

  if (!exercise) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-slate-400">No exercises selected.</p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
              FITRD WORKOUT
            </p>

            <h1 className="text-2xl font-extrabold sm:text-3xl">
              Active Workout
            </h1>
          </div>

          <button onClick={()=> dispatch(resetWorkout())} className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-purple-500/50 hover:text-white">
            Exit
          </button>
        </div>

        {/* Progress */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Workout Progress</p>
              <p className="mt-1 text-lg font-bold">
                Exercise {currentExercise}{" "}
                <span className="text-slate-500">/ {totalExercises}</span>
              </p>
            </div>

            <span className="text-sm font-semibold text-purple-400">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Exercise Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-purple-950/20 backdrop-blur-md">
          {/* Exercise Visual */}
          <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/40 via-slate-900 to-fuchsia-900/30 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 shadow-lg shadow-purple-500/10">
              <Dumbbell size={58} className="text-purple-400" />
            </div>

            {/* Exercise number */}
            <div className="absolute left-5 top-5 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-300">
              Exercise {currentExercise}
            </div>
          </div>

          {/* Exercise Information */}
          <div className="p-5 sm:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                  Target Muscle
                </p>

                <p className="text-2xl font-bold capitalize sm:text-3xl">
                  {exercise.name}
                </p>

                <p className="mt-2 text-slate-400 capitalize">
                  Focus on controlled movement and proper form.
                </p>
              </div>

              <div className="flex gap-2">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold capitalize text-cyan-400">
                  {exercise.muscle}
                </span>

                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold capitalize text-purple-400">
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            {/* Workout Stats */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                  Sets
                </p>
                <p className="text-xl font-bold">3</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                  Reps
                </p>
                <p className="text-xl font-bold">12</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-1 flex items-center gap-1 text-xs uppercase tracking-wider text-slate-500">
                  <Clock3 size={12} />
                  Rest
                </p>
                <p className="text-xl font-bold">60s</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-1 flex items-center gap-1 text-xs uppercase tracking-wider text-slate-500">
                  <Flame size={12} />
                  Calories
                </p>
                <p className="text-xl font-bold">120</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-300">
                Exercise Instructions
              </h3>

              <p className="text-sm leading-7 text-slate-400">
                Keep your body controlled throughout the movement. Maintain
                proper posture, breathe steadily, and focus on the target muscle
                rather than rushing through the repetitions.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col justify-evenly items-center gap-3 sm:flex-row">
              <button
                onClick={() => dispatch(completExercise())}
                disabled={isCompleted}
                className={`mb-3 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                  isCompleted
                    ? "cursor-not-allowed border border-green-500/30 bg-green-500/10 text-green-400"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-green-500/20"
                }`}
              >
                <CheckCircle size={18} />
                {isCompleted ? "Exercise Completed" : "Mark as Completed"}
              </button>
              <button
                onClick={() => dispatch(prevExercise())}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-purple-500/50 hover:text-white"
              >
                <ArrowLeft size={18} />
                Previous
              </button>

              <button
                onClick={() => {
                  if (isLastExercise) {
                    dispatch(finishWorkout());
                  } else {
                    dispatch(nextExercise());
                  }
                }}
                disabled={!isCompleted}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {isLastExercise ? "Finish Workout" : "Next Exercise"}
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Finish */}
            <button
              onClick={() => dispatch(finishWorkout())}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-400 transition hover:bg-green-500/20"
            >
              <CheckCircle2 size={18} />
              Finish Workout
            </button>
          </div>
        </div>

        {/* Bottom status */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
          <RotateCcw size={13} />
          Keep going — you're doing great.
        </div>
      </div>
    </main>
  );
};

export default ActiveWorkout;
