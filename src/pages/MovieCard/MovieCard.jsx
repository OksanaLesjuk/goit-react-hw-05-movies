import { getMoviesById } from 'api/api';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  BtnGoBack,
  ImgWrap,
  MainMovieCard,
  MovieCardGenreList,
  MovieCardInfo,
} from './MovieCard.styled';
import { BsArrowLeft } from 'react-icons/bs';

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
  const refLocation = useRef(location.state);

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        const {
          poster_path,
          title,
          overview,
          vote_average,
          release_date,
          genres,
        } = await getMoviesById(movieId);

        setPoster(BAZE_PATH + poster_path);
        setTitle(title);
        setReleaseYear(release_date.split('-')[0]);
        setUserScore(`${Math.round(vote_average * 10)}%`);
        setOverview(overview);
        setGenres(genres);
      } catch (err) {
        console.log(err.message);
      }
    };
    getSearchedMovies();
  }, [movieId]);

  const handleGoBack = () => {
    //використовуємо useRef,щоб можна було повернутись з адрeси Cast і Reviews , якщо лише з картки, то можна вказати location.state
    navigate(refLocation.current);
  };

  return (
    <>
      <MainMovieCard>
        <ImgWrap>
          <BsArrowLeft />
          <BtnGoBack onClick={handleGoBack}>Go back</BtnGoBack>
          <img src={poster} alt={title} />
        </ImgWrap>
        <MovieCardInfo>
          <h3>
            {title} ({releaseYear})
          </h3>
          <p>User Score: {userScore}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <MovieCardGenreList>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </MovieCardGenreList>
        </MovieCardInfo>
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
