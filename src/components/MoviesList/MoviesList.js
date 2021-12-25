import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesList({ moviesData, path = '' }) {
  const location = useLocation();
  return (
    <ul>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}${path}`} state={{from: location}}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    title: PropTypes.string
  }))
}
