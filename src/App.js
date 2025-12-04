import React from "react";
import "./App.css";
import MovieCard from "./MovieCard"; // Import the component you just made

function App() {
  // Sample Data
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      duration: "2h 28m",
      genre: ["Sci-Fi", "Action"],
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHU0BZ10RoE6jIJmeDzNdA2ewONUFGxJKLg&s",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      duration: "2h 32m",
      genre: ["Action", "Crime"],
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description:
        "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      duration: "2h 49m",
      genre: ["Adventure", "Sci-Fi"],
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0G60uV6nuIpSDORaWrNVgsSAcONZ7KwO6g&s",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
  ];

  return (
    <div className="App p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Movie Dashboard
      </h1>

      {/* The Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
