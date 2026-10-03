import { getExercises } from "@/services/exerciseApi";
import {
  Dumbbell,
  ArrowRight,
  Activity,
  Zap,
  Sparkles,
  BookMarked,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectExercise, startWorkout } from "@/redux/slices/workoutSlice";
import ActiveWorkout from "@/components/ActiveWorkout";
import WorkoutSummary from "@/components/WorkoutSummary";

const Workout = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [exercises, setExercises] = useState([]);

  const selectExercises = useSelector((state) => state.workout.exercises);
  const workoutStarted = useSelector((state) => state.workout.workoutStarted);
  const workoutFinished = useSelector((state) => state.workout.workoutFinished);
  const dispatch = useDispatch();
  const totalExercise = selectExercises.length;

  const handleWorkout = () => {
    if (selectExercises.length === 0) {
      return;
    }
    dispatch(startWorkout());
  };

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, []);

  if (workoutStarted) {
    return <ActiveWorkout />;
  }

  if (workoutFinished) {
    return <WorkoutSummary />;
  }

  return (
    <>
      <main className="relative w-full min-h-screen bg-slate-950 px-4 sm:px-6 md:px-8 py-10 sm:py-12 text-white overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 mb-4 tracking-wider uppercase">
                <Sparkles size={14} className="text-purple-400" />
                FITRD WORKOUT
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Start Your{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                  Workout
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
                Follow your workout plan and train with purpose.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-purple-500/40 via-slate-800 to-transparent" />
            </div>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-fuchsia-500 border-b-transparent border-l-transparent animate-spin" />
              </div>
              <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase animate-pulse">
                Loading exercises...
              </p>
            </div>
          )}

          {error && (
            <div className="mx-auto max-w-md my-12 p-6 rounded-2xl border border-red-500/30 bg-red-500/10 text-center shadow-lg backdrop-blur-md">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-2xl">
                🚫
              </div>
              <p className="text-red-400 text-base font-semibold tracking-wide animate-pulse">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="group relative w-full rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail / Header Graphic */}
                    <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-purple-900/40 via-slate-900 to-cyan-900/30 relative overflow-hidden border border-slate-800/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Dumbbell
                        size={56}
                        className="text-purple-400 transition-transform duration-300 group-hover:scale-110 relative z-10"
                      />
                    </div>

                    {/* Title & Muscle Info */}
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                          {exercise.name}
                        </h3>

                        <p className="mt-1.5 text-sm text-slate-400 flex items-center gap-1.5">
                          <span className="text-slate-500 font-medium">
                            Target Muscle:
                          </span>
                          <span className="text-purple-400 font-semibold capitalize">
                            {exercise.muscle}
                          </span>
                        </p>
                      </div>
                      <div>
                        <BookMarked
                          onClick={() => dispatch(selectExercise(exercise))}
                          className="text-slate-500 hover:text-white transition-all duration-300 cursor-pointer"
                          size={24}
                        />
                      </div>
                    </div>

                    {/* Badges for Difficulty & Type */}
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 capitalize">
                        <Zap size={13} className="text-cyan-400" />
                        {exercise.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400 capitalize">
                        <Activity size={13} className="text-purple-400" />
                        {exercise.type}
                      </span>
                    </div>
                  </div>

                  {/* View Details Action */}
                  <Link to={`/exercises/${exercise.name}`}>
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:from-purple-500 hover:to-fuchsia-500 cursor-pointer">
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                  Workout Ready
                </p>

                <h2 className="mt-1 text-xl font-bold text-white">
                  {totalExercise} exercises selected
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Ready to start your workout?
                </p>
              </div>

              <button
                onClick={handleWorkout}
                disabled={totalExercise === 0}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Start Workout
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Workout;
