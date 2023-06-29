import styled from '@emotion/styled';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import getRandomHexColor from 'getRandomColor';

export const Wrapper = styled.div`
  display: flex;
  margin: 0;
`;

export const UserAvatar = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #377d6a;
  color: ${() => {
    return getRandomHexColor();
  }};
`;

export const LogOutBtn = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const LogOutIcon = styled(LogOut)`
  width: 24px;
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
