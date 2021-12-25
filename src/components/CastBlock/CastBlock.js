import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s from './CastBlock.module.css';
import { fetchCastInfo } from '../../services/fetchAPI';
import imgActor from '../../images/Portrait_Placeholder.png';

export default function CastBlock() {
  const [cast, setCast] = useState();
  const params = useParams();

  useEffect(() => {
    fetchCastInfo(params.movieId).then(response => setCast(response.cast));
  }, [params.movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : imgActor
                }
                alt={actor.name}
                width="100"
              />
              <h4 className={s.actorName}>{actor.name}</h4>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
