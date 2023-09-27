import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieCard } from 'pages/MovieCard/MovieCard';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieCard />} />
      </Route>
    </Routes>
  );
};
