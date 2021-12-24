import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from '../../services/fetchAPI';

export default function ReviewsBlock() {
  const [reviews, setReviews] = useState();
  const params = useParams();

  useEffect(() => {
    fetchReviews(params.movieId).then(response => {
      setReviews(response.results);
      console.log(response.results);
    });
  }, [params.movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => 
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>"{review.content}"</p>
              </li>
          )}
          </ul>
      )}
          <li>There are no reviews yet. Be the first!</li>            
    </>
  );
}
