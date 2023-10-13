import { getMovieCast } from 'api/api';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastListItemImgWrap, CastListItem } from './Cast.styled';
import image from '../../helper/placeholder_image_new1.png';
import { scrollGallery } from 'helper/scroll';
import { BAZE_PATH } from './Cast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const galleryRef = useRef(null);

  // const scrollGallery = () => {
  //   if (galleryRef.current) {
  //     // Отримуємо позицію верхньої межі галереї відносно документу
  //     const galleryOffsetTop = galleryRef.current.offsetTop;
  //     window.scroll({
  //       top: galleryOffsetTop - 100,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
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

  useEffect(() => {
    scrollGallery(galleryRef);
  });

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
