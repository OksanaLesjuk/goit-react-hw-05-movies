import { getMoviesBySearch } from 'api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
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

  const handleFormSubmit = searchQuery => {
    setSearchedMovies([]);
    setSearchQuery(searchQuery);
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
