import { getMoviesBySearch } from 'api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const ref = useRef(query);

  useEffect(() => {
    if (!ref.current) {
      return;
    } //відміняємо запит при першому рендері

    const getSearchedMovies = async () => {
      try {
        const { results } = await getMoviesBySearch(ref.current);
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
    };
    getSearchedMovies();
  }, [ref]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    } //відміняємо запит при першому рендері

    const getSearchedMovies = async () => {
      try {
        const { results } = await getMoviesBySearch(searchQuery);
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
    };
    getSearchedMovies();
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchedMovies([]);
    setSearchQuery(query);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {searchedMovies && searchedMovies.length > 0 && (
        <MoviesList movies={searchedMovies}></MoviesList>
      )}
    </>
  );
};
