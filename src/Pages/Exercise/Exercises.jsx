import { addToFavorite } from "@/redux/slices/favoritesSlice";
import { getExercises } from "@/services/exerciseApi";
import { Dumbbell, ArrowRight, ArrowLeft, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Exercises = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [exercises, setExercises] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMuscle, setSelectedMuscle] = useState("All");
  const [search, setSearch] = useState("");

  const favoriteExercise = useSelector((state) => state.favorites.data);
  const dispatch = useDispatch();
  const totalExercise = favoriteExercise.length;

  const handleFilterChange = (value, type) => {
    switch (type) {
      case "muscle":
        setSelectedMuscle(value);
        break;
      case "difficulty":
        setSelectedDifficulty(value);
        break;
      case "type":
        setSelectedType(value);
        break;

      default:
        break;
    }
  };

  const filteredExercises = exercises.filter((exercise) => {
    const searchTerm = search.toLowerCase();
    const searchMatch =
      exercise.name.toLowerCase().includes(searchTerm) ||
      exercise.muscle.toLowerCase().includes(searchTerm) ||
      exercise.type.toLowerCase().includes(searchTerm) ||
      exercise.equipments.some((equipment) =>
        equipment.toLowerCase().includes(searchTerm),
      );
    const muscleMatch =
      selectedMuscle === "All" || exercise.muscle === selectedMuscle;
    const difficultyMatch =
      selectedDifficulty === "All" ||
      exercise.difficulty === selectedDifficulty;
    const typeMatch = selectedType === "All" || exercise.type === selectedType;

    return muscleMatch && difficultyMatch && typeMatch && searchMatch;
  });

  const uniqueMuscles = [
    ...new Set(exercises.map((exercise) => exercise.muscle)),
  ];
  const uniqueDifficulties = [
    ...new Set(exercises.map((exercise) => exercise.difficulty)),
  ];
  const uniqueTypes = [...new Set(exercises.map((exercise) => exercise.type))];

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (error) {
        console.error("Fetch failed", error);
        setError("Failed to fetch exercises");
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <section className="pt-6 pb-12 px-4 sm:px-6 md:px-8 w-full min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {error && <div className="text-center text-red-500">{error}</div>}

        {loading && (
          <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-5 z-50">
            {/* Spinning ring */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
              <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-fuchsia-500 border-b-transparent border-l-transparent animate-spin" />
            </div>
            <p className="text-slate-400 text-sm tracking-widest uppercase animate-pulse">
              Loading exercises…
            </p>
          </div>
        )}

        {/* Back Button */}
        <div className="w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm hover:border-purple-500 hover:text-white hover:bg-purple-800/10 transition-all duration-500 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-center bg-linear-to-tr from-purple-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            EXERCISE LIBRARY
          </h2>
          <p className="max-w-2xl text-center text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 text-slate-500 px-2">
            Explore our comprehensive exercise library featuring hundreds of
            exercises for all muscle groups. From strength training to
            cardiovascular workouts, find the perfect exercises to help you
            achieve your fitness goals.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full max-w-xl flex justify-between items-center gap-2 px-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-0 px-3 sm:px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-purple-600"
              placeholder="Search exercises..."
            />
            <Link to="/favorite-exercises" className="relative shrink-0">
              <button className="p-2 rounded-full border border-slate-700 bg-slate-900 text-white hover:border-purple-500 transition-colors duration-200">
                <Heart
                  size={18}
                  className="text-white/50 hover:text-gray-200 "
                />
              </button>
              {/* Favorite count badge */}
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white text-[10px] font-bold leading-none shadow-md shadow-purple-500/40 ring-1 ring-slate-900 pointer-events-none">
                {totalExercise}
              </span>
            </Link>
          </div>
          {/* Muscle Filter */}
          <div className="w-full">
            <h2 className="text-sm sm:text-base font-bold text-white mb-2 px-1">
              Filter by: Muscle
            </h2>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              <button
                onClick={() => handleFilterChange("All", "muscle")}
                className={`shrink-0 snap-start text-xs font-semibold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedMuscle === "All"
                    ? "bg-gradient-to-tr from-purple-700 to-fuchsia-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                    : "border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                All
              </button>
              {uniqueMuscles.length > 0 &&
                uniqueMuscles.map((muscle) => (
                  <button
                    key={muscle}
                    onClick={() => handleFilterChange(muscle, "muscle")}
                    className={`shrink-0 snap-start text-xs font-semibold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                      selectedMuscle === muscle
                        ? "bg-gradient-to-tr from-purple-700 to-fuchsia-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                        : "border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white"
                    }`}
                  >
                    {muscle}
                  </button>
                ))}
            </div>
          </div>
          <div className="w-full h-px bg-slate-800" />
          {/* Difficulty Filter */}
          <div className="w-full">
            <h2 className="text-sm sm:text-base font-bold text-white mb-2 px-1">
              Filter by: Difficulty
            </h2>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              <button
                onClick={() => handleFilterChange("All", "difficulty")}
                className={`shrink-0 snap-start text-xs font-semibold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedDifficulty === "All"
                    ? "bg-gradient-to-tr from-purple-700 to-fuchsia-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                    : "border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                All
              </button>
              {uniqueDifficulties.length > 0 &&
                uniqueDifficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => handleFilterChange(difficulty, "difficulty")}
                    className={`shrink-0 snap-start text-xs font-semibold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                      selectedDifficulty === difficulty
                        ? "bg-gradient-to-tr from-purple-700 to-fuchsia-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                        : "border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
            </div>
          </div>
          <div className="w-full h-px bg-slate-800" />

          {/* Type Filter */}
          <div className="w-full">
            <h2 className="text-sm sm:text-base font-bold text-white mb-2 px-1">
              Filter by: Type
            </h2>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              <button
                onClick={() => handleFilterChange("All", "type")}
                className={`shrink-0 snap-start text-xs font-semibold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedType === "All"
                    ? "bg-gradient-to-tr from-purple-700 to-fuchsia-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                    : "border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                All
              </button>
              {uniqueTypes.length > 0 &&
                uniqueTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange(type, "type")}
                    className={`shrink-0 snap-start text-xs font-semibold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                      selectedType === type
                        ? "bg-gradient-to-tr from-purple-700 to-fuchsia-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                        : "border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
            </div>
          </div>
          <div className="w-full h-px bg-slate-800" />
        </div>
        {/* card */}

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-4 sm:mt-6">
          {filteredExercises.map((exercise, index) => {
            const isFavorite = favoriteExercise.some(
              (item) => item.name === exercise.name,
            );
            const total = filteredExercises.length;
            const isLast = index === total - 1;
            const loneOnLg = isLast && total % 3 === 1;
            const loneOnSm = isLast && total % 2 === 1;
            const centerClass =
              loneOnSm && loneOnLg
                ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:col-start-2"
                : loneOnSm
                  ? "sm:col-span-2 sm:justify-self-center"
                  : loneOnLg
                    ? "lg:col-start-2"
                    : "";
            return (
              <div
                key={exercise.id}
                className={`group w-full rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-purple-500/10 ${centerClass}`}
              >
                <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-purple-900/40 via-slate-900 to-cyan-900/30">
                  <Dumbbell
                    size={64}
                    className="text-purple-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex justify-between items-center gap-2">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold uppercase text-white">
                      {exercise.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Target Muscle: {exercise.muscle}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(addToFavorite(exercise))}
                      className="shrink-0 p-2 rounded-full border border-slate-700 bg-slate-900 text-white hover:border-purple-500 transition-colors duration-400"
                    >
                      <Heart
                        size={18}
                        className={`transition-colors duration-200 ${
                          isFavorite
                            ? "fill-purple-500 text-purple-500"
                            : "text-white/50 hover:text-gray-200"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="mb-5 flex flex-col gap-2">
                  <div>
                    <span className="text-white text-xs font-semibold">
                      Difficulty:
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                      {exercise.difficulty}
                    </span>
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      {exercise.type}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                    Equipment
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exercise.equipments.map((equipment) => {
                      return (
                        <span
                          key={equipment}
                          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                        >
                          {equipment}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <Link to={`/exercises/${exercise.name}`}>
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-700  to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 cursor-pointer">
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exercises;
