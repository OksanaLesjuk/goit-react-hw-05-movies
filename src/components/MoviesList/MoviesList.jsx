import { StyledMoviesList, MovieLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMoviesList>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <MovieLink to={`/movies/${id}`} state={location}>
            {title}
          </MovieLink>
        </li>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
