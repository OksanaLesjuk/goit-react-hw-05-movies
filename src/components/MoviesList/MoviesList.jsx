import React from 'react';
import { StyledMoviesList, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <MovieLink to={`movies/${id}`}>{title}</MovieLink>
        </li>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
