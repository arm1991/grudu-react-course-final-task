import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setError } from '@/store/slices';

import { InputItem, PrimaryButton } from '@/components/UI';

import type { AppDispatch } from '@/store/types';

import { initialValues, validationSchema } from './values';
import '../auth.scss';

interface SignupProps {
  toggleIsSignIn: () => void;
  handleSubmit: (values: FormValues) => void;
}

interface FormValues {
  fullname: string;
  email: string;
  password: string;
  repeatPassword: string;
}

function Signup({ toggleIsSignIn, handleSubmit }: SignupProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleLoginClick = () => {
    toggleIsSignIn();
  };

  const handleFormSubmit = (values: FormValues) => {
    if (values.password !== values.repeatPassword) {
      dispatch(setError('Passwords does not match'));
    } else {
      handleSubmit(values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {() => (
        <Form className="form">
          <InputItem
            placeholder="Joe Smith"
            type="text"
            name="fullname"
            autoComplete="name"
            label="Full Name"
          />
          <InputItem
            placeholder="example@gmail.com"
            type="email"
            name="email"
            autoComplete="email"
            label="Email"
          />
          <InputItem
            placeholder="* * * * * * * *"
            type="password"
            name="password"
            label="Password"
          />
          <InputItem
            placeholder="* * * * * * * *"
            type="password"
            name="repeatPassword"
            label="Repeat Password"
          />
          <PrimaryButton className="formButton" type="submit">
            sign up
          </PrimaryButton>
          <PrimaryButton className="formButton" onClick={handleLoginClick}>
            sign in
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
