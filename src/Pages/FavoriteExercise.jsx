import { removeFromFavorite } from "@/redux/slices/favoritesSlice";
import { ArrowRight, Dumbbell, Heart, HeartOff, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const FavoriteExercise = () => {
  const favoriteExercise = useSelector((state) => state.favorites.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 border border-purple-500/20">
                <Heart
                  size={22}
                  className="fill-fuchsia-500 text-fuchsia-500"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Favourite Exercises
              </h1>
            </div>
            <p className="text-slate-400 text-sm ml-[52px]">
              {favoriteExercise.length === 0
                ? "No exercises saved yet"
                : `${favoriteExercise.length} exercise${favoriteExercise.length > 1 ? "s" : ""} saved`}
            </p>
          </div>

          <button
            onClick={() => navigate("/exercises")}
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 text-sm font-medium hover:border-purple-500 hover:text-white transition-all duration-400"
          >
            <Dumbbell size={15} />
            Browse Exercises
          </button>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />

        {/* ── Empty State ── */}
        {favoriteExercise.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 gap-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-2xl scale-150" />
              <div className="relative p-6 rounded-full bg-slate-900 border border-slate-800">
                <HeartOff size={48} className="text-slate-600" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                No Favourites Yet
              </h2>
              <p className="text-slate-400 text-sm max-w-xs">
                Head over to the exercises page and tap the{" "}
                <Heart size={12} className="inline text-purple-400" /> icon on
                any exercise to save it here.
              </p>
            </div>
            <Link to="/exercises">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-700 to-fuchsia-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5">
                Explore Exercises
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        ) : (
          /* ── Cards Grid ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {favoriteExercise.map((exercise) => (
              <div
                key={exercise.name}
                className="group relative w-full rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-purple-500/10"
              >
                {/* Remove button — appears on hover */}
                <button
                  onClick={() => dispatch(removeFromFavorite(exercise.name))}
                  title="Remove from favourites"
                  className="absolute top-1 right-1 p-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-500 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={13} />
                </button>

                {/* Thumbnail */}
                <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-purple-900/40 via-slate-900 to-cyan-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Dumbbell
                    size={64}
                    className="text-purple-400 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  />
                  {/* Saved badge */}
                  <span className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-semibold text-purple-300">
                    <Heart
                      size={9}
                      className="fill-purple-400 text-purple-400"
                    />
                    Saved
                  </span>
                </div>

                {/* Name & muscle */}
                <div className="flex flex-col items-start mb-4">
                  <h3 className="text-lg font-semibold uppercase text-white leading-tight">
                    {exercise.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Target: {exercise.muscle}
                  </p>
                </div>

                {/* Difficulty & type badges */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {exercise.difficulty}
                  </span>
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                    {exercise.type}
                  </span>
                </div>

                {/* Equipment */}
                {exercise.equipments && exercise.equipments.length > 0 && (
                  <div className="mb-5">
                    <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                      Equipment
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exercise.equipments.map((eq) => (
                        <span
                          key={eq}
                          className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link to={`/exercises/${exercise.name}`}>
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-700 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoriteExercise;
