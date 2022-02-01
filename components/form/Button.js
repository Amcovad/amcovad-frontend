import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, color, onClick, outline, className }) => {
  const outlineClass = outline ? 'outline' : 'solid';

  return (
    <button className={`${styles[outlineClass][color]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool
};

Button.defaultProps = {
  color: 'primary',
  outline: false,
  onClick: () => {}
};

const styles = {
  solid: {
    primary:
      'h-10 px-5 m-2 transition-colors uppercase duration-150 bg-amcovad-primary-500 rounded-md focus:shadow-outline hover:bg-amcovad-secondary-600 hover:text-white',
    secondary:
      'h-10 px-5 m-2 text-white transition-colors uppercase duration-150 bg-amcovad-secondary-600 rounded-md focus:shadow-outline hover:bg-amcovad-primary-500 hover:text-white'
  },
  outline: {
    primary:
      'h-10 px-5 m-2 text-amcovad-secondary-600 uppercase transition-colors duration-150 border border-amcovad-secondary-600 rounded-md focus:shadow-outline hover:bg-amcovad-primary-500 hover:border-amcovad-primary-500 hover:text-white',
    secondary:
      'h-10 px-5 m-2 text-amcovad-primary-500 uppercase transition-colors duration-150 border border-amcovad-primary-500 rounded-md focus:shadow-outline hover:bg-amcovad-secondary-600 hover:border-amcovad-primary-500 hover:text-white'
  }
};

export default Button;
