import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';
import { HelpIcon, HintIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';

const Textarea = ({
  className,
  floatLabel,
  label,
  leadingIcon,
  labelClassName,
  name,
  placeholder,
  rows,
  withHintIcon,
  withHintText
}) => {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && <Label className="text-base" name={name} htmlFor={name} text={label} />}

      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute top-5 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <textarea
          rows={rows}
          placeholder={placeholder ? placeholder : label}
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
        ></textarea>

        {floatLabel && <Label name={name} htmlFor={name} floatLabel text={label} floatLabelClass={labelClassName} />}

        {withHintIcon && !isValid && (
          <div
            className={classNames('absolute top-5 right-0 flex items-center pr-3 pointer-events-none', {
              hidden: withHintIcon === hasErrors
            })}
          >
            <HintIcon />
          </div>
        )}
        {hasErrors && (
          <div className="absolute top-5 right-0 flex items-center pr-3 pointer-events-none">
            <HelpIcon />
          </div>
        )}

        {isValid && (
          <div className="absolute top-5 right-0 flex items-center pr-3 pointer-events-none">
            <SuccessIcon />
          </div>
        )}
      </div>

      {withHintText && <p className="pt-1 text-sm text-secondary-700">This is a hint text to help user.</p>}
      <ErrorMessage name={name} />
    </>
  );
};
Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  placeholder: PropTypes.string
};

Textarea.defaultProps = {
  className: null,
  label: null,
  rows: '3',
  labelClassName: 'bg-secondary-25 peer-focus:bg-secondary-25 -translate-y-7 peer-focus:-translate-y-7',
  placeholder: null
};
export default Textarea;
