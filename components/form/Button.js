import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ children, color, onClick, outline }) => {
  const outlineClass = outline ? 'outline' : 'solid';

  return (
    <button className={`${styles[outlineClass][color]}`} onClick={onClick}>
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
      'h-10 px-5 m-2 text-white transition-colors uppercase duration-150 bg-[#01A1DF] rounded-md focus:shadow-outline hover:bg-[#5D6677] hover:text-white',
    secondary:
      'h-10 px-5 m-2 text-white transition-colors uppercase duration-150 bg-[#5D6677] rounded-md focus:shadow-outline hover:bg-[#01A1DF] hover:text-white'
  },
  outline: {
    primary:
      'h-10 px-5 m-2 text-[#5D6677] uppercase transition-colors duration-150 border border-[#5D6677] rounded-md focus:shadow-outline hover:bg-[#01A1DF] hover:border-[#01A1DF] hover:text-white',
    secondary:
      'h-10 px-5 m-2 text-[#01A1DF] uppercase transition-colors duration-150 border border-[#01A1DF] rounded-md focus:shadow-outline hover:bg-[#5D6677] hover:border-[#01A1DF] hover:text-white'
  }
};

export default Button;
