import { getMovieCast } from 'api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BAZE_PATH = 'https://image.tmdb.org/t/p/original';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        console.log('name :>> ', cast);

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
        // setPoster(BAZE_PATH + profile_path);
        // //     return (
        //       <li key={id}>
        //         <img src={poster} alt="name" />
        //         <p>{name}</p>
        //         <p>Character {character}</p>
        //       </li>
        //     );
        //   };
        // setPoster(BAZE_PATH + poster_path);
        // setTitle(title);
        // setReleaseYear(release_date);
        // setUserScore(popularity);
        // setOverview(overview);
        // setGenres(genres);
        // : { name, profile_path, id, character },
      } catch (err) {
        console.log(err.message);
      }
    };
    getCast();
  }, [movieId]);

  // const MakeCastEl = actor => {
  //   const { name, profile_path, id, character } = actor;
  //   setPoster(BAZE_PATH + profile_path);
  //   return (
  //     <li key={id}>
  //       <img src={poster} alt="name" />
  //       <p>{name}</p>
  //       <p>Character {character}</p>
  //     </li>
  //   );
  // };

  return (
    <div>
      <ul>
        {cast.map(({ name, poster, id, character }) => (
          <li key={id}>
            <img src={poster} alt="name" />
            <p>{name}</p>
            <p>Character {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
// getMovieCast
export default Cast;
