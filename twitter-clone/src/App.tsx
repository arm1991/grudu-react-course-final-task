import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Router from '@/router';

import { CookiesContext } from '@/contexts';
import { AppDispatch } from '@/store/types';
import { loginWithId } from '@/store/thunks';
import { authSelector } from '@/store/slices';
import { getAuthCookies, getUserCookies } from '@/utils/cookies';

import './index.scss';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const cookies = useContext(CookiesContext);
  const authStore = useSelector(authSelector);

  useEffect(() => {
    const authCookies = getAuthCookies();

    if (authCookies) {
      const userCookies = getUserCookies() as string;

      cookies.acceptCookies();
      dispatch(loginWithId({ id: userCookies }));
    }

    if (location.pathname !== '/' && !authCookies && !authStore.isAuth) {
      navigate('/');
    }
  }, [authStore.isAuth]);

  return <Router />;
}

export default App;
