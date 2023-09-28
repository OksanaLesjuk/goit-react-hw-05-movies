import { getMovieReviews } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);

        console.log('results :>> ', results);
        const makeObjReviews = () =>
          results.map(({ author, id, content }) => {
            return {
              author,
              id,
              content,
            };
          });
        setReviews(makeObjReviews);
      } catch (err) {
        console.log(err.message);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p>Autor: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
