import { getMovieCast } from 'api/api';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastListItemImgWrap, CastListItem } from './Cast.styled';
import image from '../../helper/placeholder_image_new1.png';
import { scrollGallery } from 'helper/scroll';
const BAZE_PATH = 'https://image.tmdb.org/t/p/original';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);

        const makeOdjCast = () =>
          cast.map(({ name, profile_path, id, character }) => {
            return {
              name,
              poster: profile_path ? BAZE_PATH + profile_path : image,
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
    scrollGallery(galleryRef);
  }, [movieId]);

  return (
    <div ref={galleryRef}>
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
