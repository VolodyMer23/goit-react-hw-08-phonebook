import styled from '@emotion/styled';
import { ContactPhone } from '@styled-icons/material/ContactPhone'
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 40;
  color: #010101;
  background-color: #0d1a29;
  padding: 32px;
  padding-top: 0;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #0d1a29;
  gap: 8px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 64px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 16px;
  align-items: center;
  margin: 0;
  padding: 16px;
  background-color: #dcffea;
`;

export const Logo = styled(ContactPhone)`
  width: 48px;
  color: #f76767;
  transition: all 0.3s ease-in-out;
  :hover,
  :focus {
    color: #72ceb5;
  }
  :active {
    color: #d62626;
  }
`;

export const Nav = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  flex-direction: row;
  /* margin-right: auto;
  margin-left: auto; */
`;

export const RNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;

  &:link,
  &:visited {
    color: inherit;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #516c7a;
      top: 110%;
      left: 0;
      transform: scale(0);
      transition: 300ms ease-in-out;
    }
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #252525;
      top: 110%;
      left: 0;
      transform: scale(1);
    }
  }
`;