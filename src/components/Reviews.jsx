import { fetchReviews } from 'servise/fetchMovie';
import styled from 'styled-components';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoaderActive(true);
        const data = await fetchReviews(movieId);
        const content = data.results;

        setReviews(content);
      } catch (error) {
      } finally {
        setLoaderActive(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <STitle>Reviews</STitle>
      {loaderActive && <Loader />}
      {reviews.length > 0 ? (
        <SList>
          {reviews.map(({ id, author, content }) => (
            <SItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </SItem>
          ))}
        </SList>
      ) : (
        <SInfo>There is no reviews... yet</SInfo>
      )}
      {/* {reviews.length === 0 && <p>There is no reviews... yet</p>} */}
    </div>
  );
};

const STitle = styled.h2`
  margin: 0 0 0 30px;
  /* margin: 0; */
`;
const SList = styled.ul`
  padding: 10px;
  margin: 0;
`;

const SItem = styled.li`
  list-style: none;
  margin: 0 30px;

  & h3 {
    margin: 10px 0;
  }
  & p {
    margin-bottom: 30px;
  }
`;

const SInfo = styled.p`
  margin-left: 30px;
  font-size: 20px;
`;
