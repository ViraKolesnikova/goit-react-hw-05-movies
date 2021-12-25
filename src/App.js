import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';
import CastBlock from './components/CastBlock';
import ReviewsBlock from './components/ReviewsBlock';

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
          <Route path="/movies/*" element={<MoviesPage />}>

            <Route path=":movieId" element={<MovieDetailsPage />} >
              <Route path="cast" element={<CastBlock />} />
              <Route path="reviews" element={<ReviewsBlock/>}/>
            </Route>
          </Route>            
         
          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
       <ToastContainer autoClose={4000} />
      </Container>
    </>
  );
}
