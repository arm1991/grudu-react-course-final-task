import { isAxiosError } from 'axios';

import { removeUser, setUser, setError } from '@/store/slices';
import { getRandomId } from '@/helpers';
import {
  setAuthCookies,
  removeAuthCookies,
  setUserCookies,
  removeUserCookies,
} from '@/utils/cookies';
import { AuthService } from '@/services';

import type { AppDispatch } from '../types';

interface LoginProps {
  email: string;
  password: string;
  isCookiesAllowed: boolean;
}

interface RegistrationProps {
  email: string;
  password: string;
  fullname: string;
  isCookiesAllowed: boolean;
}

export const login =
  ({ email, password, isCookiesAllowed }: LoginProps) =>
  async (dispatch: AppDispatch) => {
    try {
      const user = await AuthService.login(email);

      if (!user) {
        dispatch(setError('Invalid email or password'));
      }

      if (user.password !== password) {
        dispatch(setError('Invalid email or password'));
      }

      dispatch(setUser(user));

      if (isCookiesAllowed) {
        setAuthCookies();
        setUserCookies(user.id);
      }
    } catch (e) {
      if (!isAxiosError(e)) return;

      if (e.response?.data) {
        const errorMessage = e.response.data;

        dispatch(setError(errorMessage));
      } else {
        dispatch(setError('Something went wrong'));
      }
    }
  };

export const loginWithId =
  ({ id }: { id: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      const user = await AuthService.loginWithId(id);

      dispatch(setUser(user));

      setAuthCookies();
      setUserCookies(id);
    } catch (e) {
      if (!isAxiosError(e)) return;

      if (e.response?.data) {
        const errorMessage = e.response.data;

        dispatch(setError(errorMessage));
      } else {
        dispatch(setError('Unknown error occurred'));
      }
    }
  };

export const registration =
  ({ email, password, fullname, isCookiesAllowed }: RegistrationProps) =>
  async (dispatch: AppDispatch) => {
    try {
      const id = getRandomId();
      const user = await AuthService.registration(email, password, fullname, id);

      dispatch(setUser(user));

      if (isCookiesAllowed) {
        setAuthCookies();
        setUserCookies(user.id);
      }
    } catch (e) {
      if (!isAxiosError(e)) return;

      if (e.response?.data) {
        const errorMessage = e.response.data;

        dispatch(setError(errorMessage));
      } else {
        dispatch(setError('Unknown error occurred'));
      }
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  removeAuthCookies();
  removeUserCookies();

  dispatch(removeUser());
};
