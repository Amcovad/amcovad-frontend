import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, children, fontSize, primary, onClick, outlinePrimary, outlineSecondary, secondary }) => {
  return (
    <button
      className={classNames(
        'transition-colors uppercase duration-150 focus:shadow-outline rounded-md',
        {
          'bg-amcovad-primary-500 hover:bg-amcovad-secondary-600 hover:text-white': primary
        },
        { 'text-white  bg-amcovad-secondary-600  hover:bg-amcovad-primary-500 hover:text-white': secondary },
        {
          'text-amcovad-secondary-600 border border-amcovad-secondary-600 hover:bg-amcovad-primary-500 hover:border-amcovad-primary-500 hover:text-white':
            outlineSecondary
        },
        {
          'text-amcovad-primary-500 border border-amcovad-primary-500 hover:bg-amcovad-secondary-600 hover:border-amcovad-primary-500 hover:text-white':
            outlinePrimary
        },
        className,
        fontSize
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: null,
  fontSize: 'py-2.5 px-5',
  onClick: () => {}
};

export default Button;
