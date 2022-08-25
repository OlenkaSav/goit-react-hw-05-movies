import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Loader() {
  return (
    <Wrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3911be"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      ;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Loader.propTypes = {
  query: PropTypes.string,
};
// export default Loader;
