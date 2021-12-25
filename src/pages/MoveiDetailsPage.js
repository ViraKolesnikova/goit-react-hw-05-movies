import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return <>
    <button type="button" onClick={() =>navigate(location?.state?.from ?? '/')}>⬅Go back</button>
    <MovieCard />
    <hr />
    <div> 
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={'cast'} state={{...location, from: location?.state?.from}}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'} state={{...location, from: location?.state?.from}}>Reviews</Link>
        </li>
      </ul>      
    </div>
    <hr/>
    <Outlet/>
  </>
}