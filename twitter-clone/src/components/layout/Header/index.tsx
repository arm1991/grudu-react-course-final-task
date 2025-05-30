import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '@/store/thunks';
import { authSelector, isAuth } from '@/store/slices';
import { getInitialsFromFullName } from '@/helpers';
import { AuthDialogContext } from '@/contexts';
import { Title, TwitterIcon, UserIcon } from '@/components/UI';
import { LogOutDialog } from '@/components/UI/Dialogs';

import type { AppDispatch } from '@/store/types';

import './styles.scss';

function Header() {
  const [showDialogue, setShowDialogue] = useState(false);
  const authStore = useSelector(authSelector);
  const authDialogContext = useContext(AuthDialogContext);
  let fullName = 'Guest';

  if (isAuth(authStore)) {
    fullName = authStore.user.fullname;
  }

  const dispatch = useDispatch<AppDispatch>();

  const handleLogoutClick = () => {
    dispatch(logout());
    setShowDialogue((prev) => !prev);
  };

  const handleDialogClick = () => {
    if (isAuth(authStore)) {
      setShowDialogue((prev) => !prev);
    } else {
      authDialogContext.toggleIsOpen();
    }
  };

  return (
    <header className="header">
      <div className="header-title">
        <Link className="header-title__link" to="/">
          <TwitterIcon />
          <Title text="another twitter clone" />
        </Link>
      </div>
      <div className="header-user">
        <button className="header-user__button" type="button" onClick={handleDialogClick}>
          <span className="header-user__name">{fullName}</span>
          <div className="header-user__icon">
            <UserIcon initials={getInitialsFromFullName(fullName)} />
          </div>
        </button>
        <LogOutDialog
          showDialog={showDialogue}
          onClose={handleDialogClick}
          handleLogoutClick={handleLogoutClick}
        />
      </div>
    </header>
  );
}

export default Header;
