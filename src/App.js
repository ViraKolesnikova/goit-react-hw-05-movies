import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';
import CastBlock from './components/CastBlock';
import ReviewsBlock from './components/ReviewsBlock';
import LoaderMask from './components/LoaderMask';

const HomePage = lazy(() => import('./pages/HomePage' /*webpackChunkName: "home"*/));
const MovieDetailsPage = lazy(() => import('./pages/MoveiDetailsPage' /*webpackChunkName: "details"*/));
const MoviesPage = lazy(() => import('./pages/MoviesPage' /*webpackChunkName: "movie-page"*/));

export default function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Suspense fallback={<LoaderMask />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/*" element={<MoviesPage />}>
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<CastBlock />} />
                <Route path="reviews" element={<ReviewsBlock />} />
              </Route>
            </Route>

            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={4000} />
      </Container>
    </>
  );
}
