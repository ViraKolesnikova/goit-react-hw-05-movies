import { useState, useEffect } from 'react';

import * as fetchAPI from '../services/fetchAPI';

export default function MovieCard() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchAPI.fetchMovieDetails().then(response => setDetails(response));
  }, []);

  return (
    <div>
      <img src={} />
      <h1></h1>
      <p></p>
      <h2></h2>
      <p></p>
      <h3></h3>
      <p></p>
    </div>
  );
}
