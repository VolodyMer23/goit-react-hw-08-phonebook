import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/operationsAuth';
import { getUser } from 'Redux/selectors';
import { LogOutIcon, LogOutBtn, UserAvatar, Wrapper } from './UserBar.styled';

function UserBar() {
  const user = useSelector(getUser);
  console.log('user :>> ', user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserAvatar>{user.name.slice(0, 1).toUpperCase()}</UserAvatar>
      <LogOutBtn type="button" onClick={handleLogout}>
        <LogOutIcon />
      </LogOutBtn>
    </Wrapper>
  );
}

export default UserBar;
