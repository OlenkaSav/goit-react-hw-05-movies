import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { React } from 'react';
import PropTypes from 'prop-types';

export const MovieList = ({ moviesArray, location }) => {
  return (
    <ul>
      {moviesArray.map(({ id, title }) => (
        <StyledList key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </StyledList>
      ))}
    </ul>
  );
};

const StyledList = styled.li`
  display: flex;
  align-items: center;
  /* border: dashed; */
  margin-bottom: 5px;
  /* padding: 5px; */
  font-size: 20px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
`;

MovieList.propTypes = {
  moviesArray: PropTypes.array,
  location: PropTypes.object,
};
