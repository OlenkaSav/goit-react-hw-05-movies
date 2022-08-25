import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchById } from 'servise/fetchMovie';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  const location = useLocation();
  useEffect(() => {
    const getData = async () => {
      try {
        // setLoaderActive(true);
        const movie = await fetchById(movieId);
        setItem(movie);
      } catch (error) {
        console.log('ffff');
      } finally {
        // setLoaderActive(false);
      }
    };
    getData();
  }, [movieId]);
  //   console.log(item);
  if (!item) {
    return;
  }
  const { original_title, overview, vote_average, poster_path, genres } = item;
  console.log(genres);
  const genresStr = genres.reduce((str, genre) => {
    return str + `${genre.name}, `;
  }, '');
  const genresStrFinal = genresStr.slice(0, genresStr.length - 2);
  return (
    <>
      {item && (
        <SMain>
          <MovieCard>
            <Link to={location.state?.from ?? '/'}>Go back...</Link>
            <h2>Movie info</h2>
            <SContent>
              <img
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={original_title}
                width={`200px`}
              />
              <SText>
                <h3>{original_title}</h3>
                <p>{overview}</p>
                <p>Reiting: {vote_average}</p>
                <p>Genres: {genresStrFinal}</p>
              </SText>
            </SContent>
          </MovieCard>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </SMain>
      )}
    </>
  );
};

const SMain = styled.main`
  margin: auto;
  padding-top: 80px;
  padding-bottom: 10px;
  background-color: #cecaca;
  width: 1200px;
  min-height: 100vh;
  /* display: flex; */
`;

const MovieCard = styled.div`
  padding: 10px;
  text-align: center;
`;

const SContent = styled.div`
  display: flex;
`;
const SText = styled.div`
  text-align: left;
  padding-left: 10px;

  & p {
    font-size: 20px;
    padding: 10px;
  }

  & h3 {
    padding-left: 30px;
  }
`;
