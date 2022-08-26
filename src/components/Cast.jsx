import { fetchCredits } from 'servise/fetchMovie';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const { movieId } = useParams();

  // console.log(movieId);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoaderActive(true);
        const data = await fetchCredits(movieId);
        const actors = data.cast;
        setCast(actors);
      } catch (error) {
      } finally {
        setLoaderActive(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <STitle>Cast</STitle>
      {loaderActive && <Loader />}
      {cast && (
        <SList>
          {cast.map(({ id, name, character, profile_path }) => (
            <SItem key={id}>
              {profile_path && (
                <img
                  loading="lazy"
                  src={'https://image.tmdb.org/t/p/w500' + profile_path}
                  alt={name}
                  width={`100px`}
                />
              )}
              <h3>{name}</h3>
              <p>{character}</p>
            </SItem>
          ))}
        </SList>
      )}
      ;
    </div>
  );
};

const STitle = styled.h2`
  margin: 0 0 0 30px;
  /* margin: 0; */
`;
const SList = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0;
`;
const SItem = styled.li`
  text-align: center;
  list-style: none;
  margin: 0 30px;
  border: 1px solid;
  width: 200px;
  margin-bottom: 20px;

  & h3 {
    margin: 10px 0;
  }
  & p {
    margin-bottom: 30px;
  }
`;
