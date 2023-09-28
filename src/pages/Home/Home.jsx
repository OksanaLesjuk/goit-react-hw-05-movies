import { getTrending } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { TrendingTitle } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await getTrending();

        if (results.length > 0) {
          setTrendingMovies(results);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      <TrendingTitle>Trending movies</TrendingTitle>
      <MoviesList movies={trendingMovies}></MoviesList>
    </div>
  );
};

export default Home;
