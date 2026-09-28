const API_URL = "https://api.api-ninjas.com/v1/exercises";

export const getExercises = async () => {
  const response = await fetch(API_URL, {
    headers: {
      "X-Api-Key": import.meta.env.VITE_EXERCISE_API_KEY,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }
  const data = await response.json();
  return data;
};
