import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
