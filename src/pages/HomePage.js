import { useEffect, useState } from 'react';

import * as fetchAPI from '../services/fetchAPI';
import MoviesList from '../components/MoviesList/MoviesList';
import LoaderMask from '../components/LoaderMask';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPI
      .fetchPopularMovies()
      .then(response => setMovies(response.results))
      .catch(console.error())
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList moviesData={movies} />}
      {loading && <LoaderMask />}
    </>
  );
}
