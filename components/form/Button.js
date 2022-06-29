import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, children, color, leftIcon, onClick, outline, rightIcon, size }) => {
  const sizes = {
    xs: 'py-1.5 px-3 text-xs',
    sm: 'py-2 px-[1.125rem] text-sm',
    md: 'py-2.5 px-4 text-base',
    lg: 'py-2.5 px-[1.125rem] text-lg',
    xl: 'px-6 py-3.5 text-xl'
  };
  const styles = {
    solid: {
      primary: 'text-white bg-primary-500 hover:bg-secondary-600 hover:text-white focus:shadow-primary-xs ',
      secondary: 'text-white bg-secondary-800 hover:bg-secondary-900 hover:text-white focus:shadow-secondary-xs',
      danger: 'text-white bg-danger-600 hover:bg-danger-500 hover:text-white focus:shadow-danger-xs',
      warning: 'text-white bg-warning-600 hover:bg-warning-500 hover:text-white focus:shadow-warning-xs',
      success: 'text-white bg-success-600 hover:bg-success-500 hover:text-white focus:shadow-success-xs'
    },
    outline: {
      primary:
        'text-secondary-600 border border-secondary-600 hover:bg-primary-500 hover:border-primary-500 hover:text-white focus:shadow-primary-xs',
      secondary:
        'text-primary-500 border border-primary-500 hover:bg-secondary-600 hover:border-primary-500 hover:text-white focus:shadow-secondary-xs '
    }
  };
  const outlineClass = outline ? 'outline' : 'solid';

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'transition-colors duration-150 focus:outline-none font-medium rounded text-center inline-flex items-center justify-center mr-2',
        styles[outlineClass][color],
        sizes[size],
        className
      )}
    >
      {leftIcon && <span className="mr-2 -ml-1 w-5 h-5">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 -mr-1 w-5 h-5">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.string
};

Button.defaultProps = {
  color: 'primary',
  className: '',
  outline: false,
  onClick: () => {},
  size: 'sm'
};

export default Button;
