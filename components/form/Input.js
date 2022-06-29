import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ShowPasswordIcon, HidePasswordIcon } from '@/public/assets/signUp/passwordSvgs';
import { ArrowIcon, EmailIcon, HelpIcon, HintIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

const Input = ({
  className,
  Icon,
  leadingIcon,
  labelClassName,
  withHintIcon,
  withHintText,
  name,
  placeholder,
  label,
  floatLabel,
  type
}) => {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showHintTitle, setShowHintTitle] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleHintIconTitle = () => {
    setShowHintTitle((showHint) => !showHint);
  };

  const PasswordIcon = showPassword ? (
    <HidePasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  ) : (
    <ShowPasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  );
  const isPasswordField = type === 'password';
  const inputIcon = isPasswordField ? PasswordIcon : Icon;

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && <Label className="text-base" name={name} htmlFor={name} text={label} />}
      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <input
          placeholder={placeholder ? placeholder : label}
          type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
          id={name}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-1 w-full text-base bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer',
            className,
            { 'pl-10 pr-8': leadingIcon },
            {
              'placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer':
                floatLabel
            },
            {
              'border-danger-500 focus:border-danger-200 focus:ring-danger-200 focus:shadow-danger-xs': hasErrors
            },
            {
              'border-success-500 focus:border-success-200 focus:ring-success-200 focus:shadow-success-xs': isValid
            },
            {
              'focus:border-primary-200 focus:ring-primary-200 focus:shadow-primary-sm': !hasErrors && !isValid
            },
            {
              ' border-secondary-300 bg-secondary-25 placeholder:text-secondary-700 font-Poppins text-secondary-700':
                placeholder
            }
          )}
        />

        {floatLabel && <Label name={name} htmlFor={name} floatLabel text={label} floatLabelClass={labelClassName} />}

        {withHintIcon && !isValid && (
          <div
            className={classNames('absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none', {
              'pr-8': hasErrors
            })}
          >
            <HintIcon />
          </div>
        )}
        {hasErrors && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <HelpIcon />
          </div>
        )}

        {isValid && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <SuccessIcon />
          </div>
        )}
        {inputIcon && !isValid && (
          <div
            className={classNames('absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer', {
              'pr-8': hasErrors
            })}
          >
            {inputIcon}
          </div>
        )}
      </div>
      {withHintText && <p className="pt-1 text-sm text-secondary-700">{withHintText}</p>}
      <ErrorMessage name={name} />
    </>
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
