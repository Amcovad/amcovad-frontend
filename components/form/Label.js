import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

export function Label({ className, floatLabel, floatLabelClass, htmlFor, name, text }) {
  const {
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  return (
    <label
      htmlFor={htmlFor || name}
      className={classNames(
        {
          'absolute text-sm text-secondary-700 duration-300 transform p-2 scale-75 top-2 left-2 z-10 origin-[0] peer-focus:left-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 ':
            floatLabel
        },
        { 'cursor-pointer text-secondary-700 font-normal font-Inter': !floatLabel },
        { [className]: !floatLabel },
        { [floatLabelClass]: floatLabel },
        { 'peer-focus:text-danger-500': hasErrors },
        { 'peer-focus:text-primary-500': !hasErrors }
      )}
    >
      {text}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  floatLabel: PropTypes.any,
  floatLabelClass: PropTypes.string,
  htmlFor: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.node
};

Label.defaultProps = {
  className: 'text-xs',
  floatLabel: null,
  floatLabelClass: 'bg-secondary-25 peer-focus:bg-secondary-25 -translate-y-7 peer-focus:-translate-y-7',
  htmlFor: null,
  name: null,
  text: null
};
