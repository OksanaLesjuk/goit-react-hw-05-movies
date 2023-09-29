import { getMovieReviews } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ReviewsAutor, ReviewsContent } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [areReviewsLoaded, setAreReviewsLoaded] = useState(false);
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
        setAreReviewsLoaded(true);
      } catch (err) {
        console.log(err.message);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      <ReviewsList>
        {areReviewsLoaded && reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <ReviewsAutor>Autor: {author}</ReviewsAutor>
              <ReviewsContent>{content}</ReviewsContent>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
