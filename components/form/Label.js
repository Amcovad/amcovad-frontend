import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export function Label({ className, floatLabel, htmlFor, name, text }) {
  const {
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  const errorLabel = hasErrors ? 'peer-focus:text-amcovad-danger' : 'peer-focus:text-amcovad-primary-500';
  const style = {
    floatLabelClassName: `${errorLabel} absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 scale-75 top-3 left-3 z-10 origin-[0] peer-focus:left-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`,
    labelClassName: ` block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter`
  };

  const currentClassName = floatLabel ? style.floatLabelClassName : style.labelClassName;

  return (
    <label name={name} htmlFor={htmlFor} className={` ${currentClassName} ${className}`}>
      {text}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  floatLabel: PropTypes.any,
  htmlFor: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.node
};

Label.defaultProps = {
  htmlFor: null,
  text: null,
  floatLabel: null
};
