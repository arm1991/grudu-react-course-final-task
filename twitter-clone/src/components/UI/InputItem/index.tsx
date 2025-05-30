import { useState } from 'react';
import { ErrorMessage, Field } from 'formik';

import './styles.scss';

type InputItemProps = {
  placeholder: string;
  type: string;
  name: string;
  autoComplete?: string;
  label: string;
};

function InputItem({ placeholder, type, name, autoComplete, label }: InputItemProps) {
  const [inputType, setInputType] = useState(type);

  const toggleShowPassword = () => {
    setInputType((value: string) => {
      if (value === 'password') {
        return 'text';
      }
      return 'password';
    });
  };

  return (
    <div className="formContainer">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <span className="error">
        <ErrorMessage name={name} />
      </span>
      <Field
        className="formInput"
        type={inputType}
        autoComplete={autoComplete}
        placeholder={placeholder}
        id={name}
        name={name}
      />
      {type === 'password' && (
        <button
          className="showPassword"
          aria-label="showPassword"
          type="button"
          onClick={toggleShowPassword}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7-11-7-11-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default InputItem;
