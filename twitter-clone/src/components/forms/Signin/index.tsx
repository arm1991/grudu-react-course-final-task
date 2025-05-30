import { Form, Formik } from 'formik';

import { PrimaryButton, InputItem } from '@/components/UI';

import { initialValues, validationSchema } from './values';
import '../auth.scss';

interface SigninProps {
  toggleIsSignIn: () => void;
  handleSubmit: (values: FormValues) => void;
}

interface FormValues {
  email: string;
  password: string;
}

function Signin({ toggleIsSignIn, handleSubmit }: SigninProps) {
  const handleRegistrate = () => {
    toggleIsSignIn();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <Form className="form">
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

          <PrimaryButton className="formButton" type="submit">
            sign in
          </PrimaryButton>
          <PrimaryButton className="formButton" onClick={handleRegistrate}>
            sign up
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}

export default Signin;
