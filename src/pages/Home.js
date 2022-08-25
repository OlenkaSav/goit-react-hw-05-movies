import { fetchPopular } from 'servise/fetchMovie';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import { Loader } from 'components/Loader';

export const Home = () => {
  const [popular, setPopular] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const getData = async () => {
      try {
        setLoaderActive(true);
        const tranding = await fetchPopular();
        setPopular(tranding);
      } catch (error) {
      } finally {
        setLoaderActive(false);
      }
    };
    getData();
  }, []);

  return (
    <SMain>
      <h2>Trending movies</h2>
      {loaderActive && <Loader />}
      <MovieList moviesArray={popular} location={location} />
    </SMain>
  );
};

const SMain = styled.main`
  margin: auto;
  padding-top: 80px;
  padding-bottom: 10px;
  background-color: #cecaca;
  height: 100%;
  width: 1200px;
  min-height: 100vh;
  text-align: center;
`;
