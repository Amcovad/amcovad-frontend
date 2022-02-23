import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ShowPasswordIcon, HidePasswordIcon } from '../../assets/svgs/svgs';
import { Label, ErrorMessage } from '.';

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

  const errorClass = hasErrors ? 'focus:border-amcovad-danger' : 'focus:border-amcovad-primary-500';

  return (
    <div className="relative z-0 mb-4 w-full group">
      <input
        name={name}
        placeholder={placeholder ? placeholder : label}
        type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
        id={name}
        {...register(name)}
        className={`${errorClass} block py-2.5 px-0 w-full text-sm  text-amcovad-secondary-700 bg-transparent placeholder-transparent border-2 rounded-md border-amcovad-secondary-300 appearance-none focus:outline-none focus:ring-0  peer ${className}`}
      />
      <Label name={name} htmlFor={name} floatLabel text={label} className={`${labelClassName}`} />

      {inputIcon && (
        <span className="absolute top-4 right-2 cursor-pointer" data-testid="icon">
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
