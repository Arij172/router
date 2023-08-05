import React from "react";
import MovieList from "./MovieList";

const Home = () => {
return (
    <div>
    <h1>Movie List</h1>
    <MovieList movies={filteredMovies} />
    </div>
);
};

export default Home;
