import React from "react";
import { Link } from "react-router-dom";

const MovieDescription = ({ match }) => {
const { title } = match.params;


const movie = movies.find((movie) => movie.title === title);

if (!movie) {
    return <div>Movie not found.</div>;
}

return (
    <div>
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>

    <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
    ></iframe>

    <Link to="/">Back to Home</Link>
    </div>
);
};

export default MovieDescription;
