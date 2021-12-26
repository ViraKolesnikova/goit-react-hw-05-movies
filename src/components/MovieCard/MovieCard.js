import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s from './MovieCard.module.css';
import * as fetchAPI from '../../services/fetchAPI';
import img from '../../images/60380.jpg';

import LoaderMask from '../LoaderMask';

export default function MovieCard() {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPI
      .fetchMovieDetails(params.movieId)
      .then(response => setDetails(response))
      .catch(console.error())
      .finally(() => setLoading(false));
  }, [params.movieId]);

  return (
    <>
      {details && (
        <div className={s.card}>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : img
            }
            alt={details.title}
            width="300"
          />
          <div className={s.discription}>
            <h1>
              {details.title}({details.release_date.slice(0, 4)})
            </h1>
            <p className={s.score}>User score: {details.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p className={s.overview}>{details.overview}</p>
            <h3>Genres</h3>
            <p>{details.genres.map(genre => genre.name)}</p>
          </div>
        </div>
      )}
      {loading && <LoaderMask />}
    </>
  );
}
