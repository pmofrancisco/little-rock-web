import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Brand = styled(RouterLink)`
  color: black;
  flex: 1;
  font-weight: bold;
  text-decoration: none;
`;

const Header = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  padding: 10px;
`;

const Link = styled(RouterLink)`
  color: black;
  text-decoration: none;
`;

export default () => (
  <Header>
    <Brand to="/">LITTLE ROCK</Brand>
    <Link to="/auth/login">Login</Link>
    <Link to="/auth/signup">Signup</Link>
    <Link to="/about-us">About Us</Link>
  </Header>
);
