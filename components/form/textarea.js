import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const Textarea = ({ className, label, name, placeholder }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  const errorClass = hasErrors ? 'focus:border-amcovad-danger' : 'focus:border-amcovad-primary-500';
  const errorLabel = hasErrors ? 'peer-focus:text-amcovad-danger' : 'peer-focus:text-amcovad-primary-500';

  return (
    <div className="relative z-0 mb-4 w-full group">
      <textarea
        name={name}
        placeholder={placeholder ? placeholder : label}
        {...register(name)}
        className={`${errorClass} h-32 lg:h-48 px-4 w-full text-sm  text-amcovad-secondary-700  placeholder-transparent border-2 rounded-md border-amcovad-secondary-300 appearance-none focus:outline-none focus:ring-0  peer ${className}`}
      />
      <label
        htmlFor={name}
        className={`${errorLabel} absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 scale-75 top-3 left-3 z-10 origin-[0] peer-focus:left-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}
      >
        {label}
      </label>
      {errors?.[name] && <div className="text-amcovad-danger">{errors?.[name]?.message}</div>}
    </div>
  );
};
Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

Textarea.defaultProps = {
  label: null,
  placeholder: null
};
export default Textarea;
