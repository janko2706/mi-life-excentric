import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: fit-content;
  width: 100vw;
  margin-top: -2vmin;
  gap: 4vmin;
  z-index: 999;
  font-size: 1em;

  & :nth-child(2) {
    margin-left: -5vmin;
    ::before {
      content: '';
      width: 100%;
      height: 0.3vmin;
      background: white;
      position: absolute;
      top: 110%;
      z-index: 99;
      left: 0;
      border-radius: 1vmin;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    :hover {
      ::before {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  & :nth-child(3) {
    ::before {
      content: '';
      width: 100%;
      height: 0.3vmin;
      background: white;
      position: absolute;
      top: 110%;
      z-index: 99;
      left: 0;
      border-radius: 1vmin;
      transform: translateX(-100%);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    :hover {
      ::before {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;
export const NeonTitle = styled.div`
  font-family: 'Sacramento', cursive;
  font-size: 3em;
  width: fit-content;
  height: 100%;
  padding: 5vmin;
  text-shadow: 0 0 5px rgba(165, 140, 137, 1), 0 0 15px rgba(165, 140, 137, 1),
    0 0 20px rgba(165, 140, 137, 1), 0 0 40px rgba(165, 140, 137, 1),
    0 0 60px rgba(165, 140, 137, 1);
  color: var(--anti-flash-white);
`;
export const NavLinks = styled(Link)`
  color: var(--anti-flash-white);
  text-decoration: none;
  font-weight: 300;
  position: relative;
`;
