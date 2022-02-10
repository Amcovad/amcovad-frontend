import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ShowPasswordIcon, HidePasswordIcon } from '../../assets/svgs/svgs';

const Input = ({ className, Icon, label, name, placeholder, type, register, errors }) => {
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
  const errorLabel = hasErrors ? 'peer-focus:text-amcovad-danger' : 'peer-focus:text-amcovad-primary-500';

  return (
    <div className="relative z-0 mb-4 w-full group">
      <input
        name={name}
        placeholder={placeholder ? placeholder : label}
        type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
        id={name}
        {...register}
        className={`${errorClass} block py-2.5 px-0 w-full text-sm  text-amcovad-secondary-700 bg-transparent placeholder-transparent border-2 rounded-md border-amcovad-secondary-300 appearance-none focus:outline-none focus:ring-0  peer ${className}`}
      />
      <label
        htmlFor={name}
        className={`${errorLabel} absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 scale-75 top-3 left-1 z-10 origin-[0] peer-focus:left-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}
      >
        {label}
      </label>
      {inputIcon && (
        <span className="absolute top-4 right-2 cursor-pointer" data-testid="icon">
          {inputIcon}
        </span>
      )}

      {errors?.[name] && (
        <div className="text-amcovad-danger py-1">
          <p>{errors?.[name]?.message}</p>
        </div>
      )}
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
