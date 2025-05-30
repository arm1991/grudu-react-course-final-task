import Cookies from 'js-cookie';
import { getRandomId } from '@/helpers';

const { AUTH_COOKIES } = process.env;
const { USER_COOKIES } = process.env;

export const setAuthCookies = () => {
  const token = getRandomId();

  if (!AUTH_COOKIES) {
    throw new Error('AUTH_COOKIES env variable is not defined');
  }

  Cookies.set(AUTH_COOKIES, token, { expires: 7 });
};

export const removeAuthCookies = () => {
  if (!AUTH_COOKIES) {
    throw new Error('AUTH_COOKIES env variable is not defined');
  }

  Cookies.remove(AUTH_COOKIES);
};

export const getAuthCookies = () => {
  if (!AUTH_COOKIES) {
    throw new Error('AUTH_COOKIES env variable is not defined');
  }

  return Cookies.get(AUTH_COOKIES);
};

export const setUserCookies = (id: string) => {
  if (!USER_COOKIES) {
    throw new Error('USER_COOKIES env variable is not defined');
  }

  Cookies.set(USER_COOKIES, id, { expires: 7 });
};

export const getUserCookies = () => {
  if (!USER_COOKIES) {
    throw new Error('USER_COOKIES env variable is not defined');
  }

  return Cookies.get(USER_COOKIES);
};

export const removeUserCookies = () => {
  if (!USER_COOKIES) {
    throw new Error('USER_COOKIES env variable is not defined');
  }

  Cookies.remove(USER_COOKIES);
};
