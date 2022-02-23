import React from 'react';
import PropTypes from 'prop-types';

export function Label({ className, floatLabel, htmlFor, name, text }) {
  const style = {
    floatLabelClassName: `absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 scale-75 top-3 left-1 z-10 origin-[0] peer-focus:left-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`,
    labelClassName: `block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter`
  };
  const currentClassName = floatLabel ? style.floatLabelClassName : style.labelClassName;

  return (
    <label name={name} htmlFor={htmlFor} className={`${currentClassName} ${className}`}>
      {text}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  name: PropTypes.string
};

Label.defaultProps = {
  htmlFor: null,
  name: null
};
