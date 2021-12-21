import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

export default function MovieDetailsPage() {
  return <>
    <button type="button">⬅Go back</button>
    <MovieCard />
    <div>
      <p>
        <ul>
          <Link />
          <Link/>
        </ul>
      </p>
    </div>
  </>
}