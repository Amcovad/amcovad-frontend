import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

const Toggle = ({ containerClassName, label, name, value, toggleClassName }) => {
  const { register } = useFormContext();
  return (
    <>
      <div className={classNames('relative flex items-center', containerClassName)}>
        <input
          name={name}
          type="checkbox"
          {...register(name)}
          id={`toggle-${name}-${value.toString()}`}
          value={value}
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <span
          className={classNames(
            'w-11 h-6 flex items-center flex-shrink-0  p-1 bg-amcovad-secondary-300 rounded-full duration-300 ease-in-out peer-checked:bg-amcovad-primary-500 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4',
            toggleClassName
          )}
        />
        <Label
          name={name}
          htmlFor={`toggle-${name}-${value.toString()}`}
          text={label}
          labelClassName="ml-2"
          fontSize="text-base"
        />
      </div>

      <ErrorMessage name={name} className="text-sm" />
    </>
  );
};

Toggle.propTypes = {
  containerClassName: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  toggleClassName: PropTypes.string
};
Toggle.defaultProps = {
  label: null,
  containerClassName: null,
  toggleClassName: null
};

export default Toggle;
