const baseURL = 'https://api.themoviedb.org/3/';
const keyAPI = 'api_key=a907caf8c46067564d1786718be1cb84';

async function fetchMoviesAPI(url='') {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
    } catch (error) {
    console.log(error);
  }
}

export function fetchPopularMovies() {
  const popularFilms = baseURL+'trending/movie/day?'+keyAPI;
  return fetchMoviesAPI(popularFilms);
}

export function fetchMovieDetails(movieId) {
  const movieDetails = baseURL + `movie/${movieId}?` + keyAPI;
  return fetchMoviesAPI(movieDetails);
}