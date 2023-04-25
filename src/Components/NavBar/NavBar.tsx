import React from 'react';
import { NavBarStyled, NavLinks, NeonTitle } from './styles';

const NavBar = () => {
  return (
    <NavBarStyled>
      <NeonTitle>Mi Life Design</NeonTitle>
      <NavLinks to='/'>Projects</NavLinks>
      <NavLinks to='/about'>About</NavLinks>
    </NavBarStyled>
  );
};

export default NavBar;
