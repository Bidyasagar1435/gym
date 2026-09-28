import React, { useEffect, useState } from "react";
import { ArrowLeft, Dumbbell, CircleCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [exercise, setExercise] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    const getExerciseDetails = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/exercises?name=${name}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": import.meta.env.VITE_EXERCISE_API_KEY,
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);

        if (data.length === 0) {
          throw new Error("Exercise not found");
        }

        setExercise(data[0]);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch exercise details");
      } finally {
        setLoading(false);
      }
    };

    getExerciseDetails();
  }, [name]);

  /* Loading */
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 rounded-full border-4 border-purple-600 border-t-transparent animate-spin" />

        <p className="text-slate-400 text-sm tracking-wide">
          Loading exercise details...
        </p>
      </div>
    );
  }

  /* Error */
  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-red-400 text-center text-sm">{error}</p>

        <Link
          to="/exercises"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition"
        >
          <ArrowLeft size={17} />
          Back to Exercises
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        
        <Link
          to="/exercises"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm hover:border-purple-500 hover:text-white hover:bg-purple-800/10 transition-all duration-500 cursor-pointer mb-2"
        >
          <ArrowLeft size={18} />
          Back to Exercises
        </Link>

        {exercise && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
            {/* Header */}
            <div className="p-6 sm:p-8 md:p-10 border-b border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Dumbbell className="text-cyan-400" size={22} />
                </div>

                <span className="text-sm text-cyan-400 uppercase tracking-wider">
                  {exercise.type}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize">
                {exercise.name}
              </h1>

              <p className="mt-4 text-slate-400">
                Complete exercise information, equipment and instructions.
              </p>
            </div>

            {/* Basic information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-800">
              <div className="p-6 border-b sm:border-b-0 sm:border-r border-slate-800">
                <p className="text-sm text-slate-500 mb-2">Target Muscle</p>

                <p className="text-lg font-semibold text-white capitalize">
                  {exercise.muscle}
                </p>
              </div>

              <div className="p-6 border-b sm:border-b-0 sm:border-r border-slate-800">
                <p className="text-sm text-slate-500 mb-2">Difficulty</p>

                <p className="text-lg font-semibold text-white capitalize">
                  {exercise.difficulty}
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-500 mb-2">Exercise Type</p>

                <p className="text-lg font-semibold text-white capitalize">
                  {exercise.type}
                </p>
              </div>
            </div>

            {/* Main content */}
            <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Instructions */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-5">
                  Instructions
                </h2>

                <p className="text-slate-300 leading-8">
                  {exercise.instructions}
                </p>
              </div>

              {/* Equipment */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-5">
                  Equipment
                </h2>

                <div className="flex flex-wrap gap-3">
                  {exercise.equipments.map((equipment) => (
                    <span
                      key={equipment}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 capitalize"
                    >
                      {equipment}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="mx-6 mb-6 sm:mx-8 sm:mb-8 md:mx-10 md:mb-10 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CircleCheck size={19} className="text-yellow-400" />

                <h2 className="font-semibold text-white">Safety Information</h2>
              </div>

              <p className="text-sm text-slate-400 leading-7">
                {exercise.safety_info}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExerciseDetails;
