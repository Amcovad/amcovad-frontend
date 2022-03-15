import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, children, fontSize, color, onClick, outline }) => {
  const outlineClass = outline ? 'outline' : 'solid';

  return (
    <button className={classNames(styles[outlineClass][color], className, fontSize)} onClick={onClick}>
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
  fontSize: 'py-2.5 px-5',
  outline: false,
  onClick: () => {}
};

const styles = {
  solid: {
    primary:
      'transition-colors uppercase duration-150 bg-amcovad-primary-500 rounded-md focus:shadow-outline hover:bg-amcovad-secondary-600 hover:text-white',
    secondary:
      'text-white transition-colors uppercase duration-150 bg-amcovad-secondary-600 rounded-md focus:shadow-outline hover:bg-amcovad-primary-500 hover:text-white'
  },
  outline: {
    primary:
      'text-amcovad-secondary-600 uppercase transition-colors duration-150 border border-amcovad-secondary-600 rounded-md focus:shadow-outline hover:bg-amcovad-primary-500 hover:border-amcovad-primary-500 hover:text-white',
    secondary:
      'text-amcovad-primary-500 uppercase transition-colors duration-150 border border-amcovad-primary-500 rounded-md focus:shadow-outline hover:bg-amcovad-secondary-600 hover:border-amcovad-primary-500 hover:text-white'
  }
};

export default Button;
