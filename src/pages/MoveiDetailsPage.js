import { Link, Outlet } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

export default function MovieDetailsPage() {
  return <>
    <button type="button">⬅Go back</button>
    <MovieCard />
    <hr />
    <div> 
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>      
    </div>
    <hr/>
    <Outlet/>
  </>
}