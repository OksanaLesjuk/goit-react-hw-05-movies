import { getTrending } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
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
      <h2>Trending movies</h2>
      <MoviesList movies={trendingMovies}></MoviesList>
    </div>
  );
};

export default Home;
