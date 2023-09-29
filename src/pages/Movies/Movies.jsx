import { getMoviesBySearch } from 'api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const ref = useRef(query);

  const getSearchedMovies = useCallback(async value => {
    try {
      const { results } = await getMoviesBySearch(value);
      if (!results.length) {
        Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
        return;
      }
      if (results.length > 0) {
        setSearchedMovies(results);
      }
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    } //відміняємо запит при першому рендері
    getSearchedMovies(ref.current);
  }, [getSearchedMovies, ref]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    } //відміняємо запит при першому рендері
    getSearchedMovies(searchQuery);
  }, [getSearchedMovies, searchQuery]);

  const handleFormSubmit = query => {
    setSearchedMovies([]);
    setSearchQuery(query);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {searchedMovies && searchedMovies.length > 0 && (
        <MoviesList
          movies={searchedMovies}
          setSearchedMovies={setSearchedMovies}
        ></MoviesList>
      )}
    </>
  );
};

export default Movies;
