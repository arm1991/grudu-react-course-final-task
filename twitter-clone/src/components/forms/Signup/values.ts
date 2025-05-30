import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';

export const initialValues = { fullname: '', email: '', password: '', repeatPassword: '' };

export const validationSchema = Yup.object({
  email: Yup.string()
    .test('is-valid-email', 'Invalid email format', (value) =>
      value ? EmailValidator.validate(value) : false,
    )
    .required('Required'),
  fullname: Yup.string().min(1, 'Too Short').max(512, 'Too Long').required('Required'),
  password: Yup.string()
    .min(8, 'Must be min 8 characters')
    .max(256, 'Must be max 256 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .min(8, 'Must be min 8 characters')
    .max(256, 'Must be max 256 characters')
    .required('Required'),
});
