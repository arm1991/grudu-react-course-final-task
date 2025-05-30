import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, registration } from '@/store/thunks';
import { AuthDialogContext, CookiesContext } from '@/contexts';
import { SignIn, SignUp } from '@/components/forms';

import type { FormFieldsLogin, FormFieldsRegistration } from '@/interfaces';
import type { AppDispatch } from '@/store/types';

import DialogWrapper from '../DialogWrapper';

function AuthDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const [isSignIn, setIsSignIn] = useState(true);
  const authDialogContext = useContext(AuthDialogContext);
  const cookies = useContext(CookiesContext);
  const isCookiesAllowed = cookies.getState();

  const toggleIsSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleRegistrationClick = ({ email, password, fullname }: FormFieldsRegistration) => {
    dispatch(registration({ email, password, fullname, isCookiesAllowed }));
    authDialogContext.toggleIsOpen();
  };

  const handleLoginClick = ({ email, password }: FormFieldsLogin) => {
    dispatch(login({ email, password, isCookiesAllowed }));
    authDialogContext.toggleIsOpen();
  };

  return (
    <DialogWrapper showDialog={authDialogContext.isOpen} onClose={authDialogContext.toggleIsOpen}>
      {isSignIn ? (
        <SignIn toggleIsSignIn={toggleIsSignIn} handleSubmit={handleLoginClick} />
      ) : (
        <SignUp toggleIsSignIn={toggleIsSignIn} handleSubmit={handleRegistrationClick} />
      )}
    </DialogWrapper>
  );
}

export default AuthDialog;
