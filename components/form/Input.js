import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ShowPasswordIcon, HidePasswordIcon } from '@/public/assets/signUp/passwordSvgs';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

const Input = ({ className, Icon, labelClassName, name, placeholder, label, type }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const PasswordIcon = showPassword ? (
    <HidePasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  ) : (
    <ShowPasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  );
  const isPasswordField = type === 'password';
  const inputIcon = isPasswordField ? PasswordIcon : Icon;

  const hasErrors = !!errors?.[name];

  return (
    <div className="relative z-0 mb-4 w-full group">
      <input
        placeholder={placeholder ? placeholder : label}
        type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
        id={name}
        {...register(name)}
        className={classNames(
          'block py-[16.5px] px-3.5 w-full text-sm  border-2 rounded-md  focus:outline-none focus:ring-0  peer',
          className,
          { 'focus:border-danger-500': hasErrors },
          { 'focus:border-primary-500': !hasErrors },
          {
            'placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700': label
          },
          {
            ' border-secondary-300 bg-secondary-25 placeholder:text-secondary-700 font-Poppins text-secondary-700':
              placeholder
          }
        )}
      />
      {label && <Label name={name} htmlFor={name} floatLabel text={label} floatLabelClass={labelClassName} />}

      {inputIcon && (
        <span className="absolute top-5 right-3 cursor-pointer" data-testid="icon">
          {inputIcon}
        </span>
      )}

      <ErrorMessage name={name} />
    </div>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string
  }),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  label: null,
  type: 'text',
  placeholder: null,
  Icon: null
};
export default Input;
