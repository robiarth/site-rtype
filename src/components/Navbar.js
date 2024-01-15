import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #141414;
  color: white;
`;

const NavbarBrand = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.li`
  margin-right: 1rem;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffd300;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBrand>RacoonFPS</NavbarBrand>
      <NavbarLinks>
        <NavbarLink>
          <a href="/">Home</a>
        </NavbarLink>
        <NavbarLink>
          <a href="/cta">Download</a>
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;