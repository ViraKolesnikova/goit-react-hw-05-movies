import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as fetchAPI from '../services/fetchAPI';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchAPI.fetchPopularMovies().then(response=> setMovies(response.results));    
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>)
          )}
        </ul>
      )}
    </>
  )
}