import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { fetchByQuery } from '../services/fetchAPI';

import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';
import LoaderMask from '../components/LoaderMask';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const queryValue = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {      
      setLoading(true);
      fetchByQuery(query).then(response => {
        response.results.length === 0
        ? toast.error('Nothing was found!')
        : setMoviesByQuery(response.results);
      }).catch(console.error())
      .finally(() => setLoading(false)); 
    }    
  }, [query]);

  useEffect(() => {
    location.search !== '' &&
      fetchByQuery(queryValue)
        .then(response => setMoviesByQuery(response.results))
        .catch(console.error())        
  }, [location.search, queryValue]);

  const findMovieByQuery = keyword => {
    setQuery(keyword);
    navigate({
      ...location,
      search: `query=${keyword}`,
    });
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="" element={<SearchForm onSubmit={findMovieByQuery} />}>
            {moviesByQuery?.length > 0 && (
              <Route
                index
                element={<MoviesList moviesData={moviesByQuery} />}
              />
            )}
          </Route>
        </Routes>

        <Outlet />
      </div>
      {loading && <LoaderMask/>}
    </>
  );
}
