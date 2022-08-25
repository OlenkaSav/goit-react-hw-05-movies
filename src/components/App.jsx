import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
import { MovieInfo } from 'pages/MovieInfo';
import { Layout } from 'components/Layout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </>
  );
};
