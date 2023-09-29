import { getMovieCast } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastListItemImgWrap, CastListItem } from './Cast.styled';

const BAZE_PATH = 'https://image.tmdb.org/t/p/original';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);

        const makeOdjCast = () =>
          cast.map(({ name, profile_path, id, character }) => {
            return {
              name,
              poster: BAZE_PATH + profile_path,
              id,
              character,
            };
          });
        setCast(makeOdjCast);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast.map(({ name, poster, id, character }) => (
          <CastListItem key={id}>
            <CastListItemImgWrap>
              <img src={poster} alt={name} />
            </CastListItemImgWrap>
            <div>
              <p>{name}</p>
              <p>
                Character: <br />
                {character}
              </p>
            </div>
          </CastListItem>
        ))}
      </CastList>
    </div>
  );
};
// getMovieCast
export default Cast;
