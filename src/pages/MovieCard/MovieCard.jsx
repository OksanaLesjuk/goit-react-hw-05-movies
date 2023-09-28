import { getMoviesById } from 'api/api';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImgWrap, StyledMovieCard } from './MovieCard.styled';

const BAZE_PATH = 'https://image.tmdb.org/t/p/original';
export const MovieCard = () => {
  const { movieId } = useParams();

  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState();
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState('');
  const [userScore, setUserScore] = useState();

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        const {
          poster_path,
          title,
          overview,
          popularity,
          release_date,
          genres,
        } = await getMoviesById(movieId);

        setPoster(BAZE_PATH + poster_path);
        setTitle(title);
        setReleaseYear(release_date);
        setUserScore(popularity);
        setOverview(overview);
        setGenres(genres);
      } catch (err) {
        console.log(err.message);
      }
    };
    getSearchedMovies();
  }, [movieId]);

  return (
    <StyledMovieCard>
      <ImgWrap>
        <button>Go back</button>
        <img src={poster} alt={title} />
      </ImgWrap>
      <div>
        <h3>
          {title} ({releaseYear})
        </h3>
        <p>User Score: {userScore}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </StyledMovieCard>
  );
};
