import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, children, color, onClick, outline, Icon }) => {
  const outlineClass = outline ? 'outline' : 'solid';

  return (
    <button
      className={classNames(
        'transition-colors uppercase duration-150 rounded-md focus:shadow-outline inline-flex items-center justify-center ',
        styles[outlineClass][color],
        className
      )}
      onClick={onClick}
    >
      {children}
      {Icon && <span className="ml-2 -mr-1">{Icon}</span>}
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
  className: 'py-2.5 px-5',
  outline: false,
  onClick: () => {}
};

const styles = {
  solid: {
    primary: 'bg-primary-500 hover:bg-secondary-600 hover:text-white  ',
    secondary: 'text-white bg-secondary-600 hover:bg-primary-500 hover:text-white '
  },
  outline: {
    primary:
      'text-secondary-600 border border-secondary-600 hover:bg-primary-500 hover:border-primary-500 hover:text-white ',
    secondary:
      'text-primary-500 border border-primary-500 hover:bg-secondary-600 hover:border-primary-500 hover:text-white '
  }
};

export default Button;
