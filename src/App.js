import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MoveiDetailsPage';
import MoviesPage from './pages/MoviesPage';

export default function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />} />
          </Route>
            
         
          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
      </Container>
    </>
  );
}
