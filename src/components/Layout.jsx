import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <SContainer>
        <SHeader>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </SHeader>
      </SContainer>

      <Suspense>
        <Outlet />
      </Suspense>

      <Toaster />
    </>
  );
};
const SContainer = styled.div`
  position: relative;
  margin: auto;
  width: 1200px;
`;

const SHeader = styled.header`
  position: fixed;
  top: 0;
  /* left: 50%-600px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 80px;

  background-color: #c76666;
`;
const StyledLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  padding: ${p => 20}px;
  color: ${p => `#5a5d67`};
  text-decoration: none;
  &.active {
    color: ${p => `#061f78`};
  }
`;
