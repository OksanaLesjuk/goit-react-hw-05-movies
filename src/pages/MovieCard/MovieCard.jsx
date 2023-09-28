import { getMoviesById } from 'api/api';

import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { ImgWrap, MainMovieCard } from './MovieCard.styled';

const BAZE_PATH = 'https://image.tmdb.org/t/p/original';

export const MovieCard = () => {
  const { movieId } = useParams();

  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState();
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState('');
  const [userScore, setUserScore] = useState();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleGoBack = () => {
    navigate(location.state);
  };

  return (
    <>
      <MainMovieCard>
        <ImgWrap>
          <button onClick={handleGoBack}>Go back</button>
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
      </MainMovieCard>
      <div>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
