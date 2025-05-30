import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object({
  email: Yup.string()
    .test('is-valid-email', 'Invalid email format', (value) =>
      value ? EmailValidator.validate(value) : false,
    )
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be min 8 characters')
    .max(256, 'Must be max 256 characters')
    .required('Required'),
});
