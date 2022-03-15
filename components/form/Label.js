import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

export function Label({ className, fontSize, floatLabel, floatLabelClass, htmlFor, name, text }) {
  const {
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  return (
    <label
      htmlFor={htmlFor || name}
      className={classNames(
        {
          'absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 peer-focus:-translate-y-7 bg-amcovad-secondary-100 peer-focus:bg-amcovad-secondary-100 p-2 scale-75 top-2 left-2 z-10 origin-[0] peer-focus:left-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 ':
            floatLabel
        },
        { 'cursor-pointer text-amcovad-secondary-700 font-normal font-Inter': !floatLabel },
        { [fontSize]: !floatLabel },
        { [className]: !floatLabel },
        { [floatLabelClass]: floatLabel },
        { 'peer-focus:text-amcovad-danger': hasErrors },
        { 'peer-focus:text-amcovad-primary-500': !hasErrors }
      )}
    >
      {text}
    </label>
  );
}

Label.propTypes = {
  fontSize: PropTypes.oneOf(['text-xs', 'text-sm', 'text-base']),
  floatLabel: PropTypes.any,
  htmlFor: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.node
};

Label.defaultProps = {
  fontSize: 'text-xs',
  floatLabel: null,
  htmlFor: null,
  name: null,
  text: null
};
