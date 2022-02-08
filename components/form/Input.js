import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, Icon, label, name, placeholder, type, register, errors }) => {
  const hasErrors = !!errors?.[name];
  const errorClass = hasErrors ? 'border-red-500' : '';

  return (
    <div className="relative z-0 mb-4 w-full group">
      <input
        name={name}
        placeholder={placeholder ? placeholder : label}
        type={type}
        id={name}
        {...register}
        className={`${errorClass} block py-2.5 px-0 w-full text-sm text-amcovad-secondary-700 bg-transparent placeholder-transparent border-2 rounded-md border-amcovad-secondary-300 appearance-none focus:outline-none focus:ring-0 focus:border-amcovad-primary-500 peer ${className}`}
      />
      <label
        htmlFor={name}
        className={`absolute text-sm text-amcovad-secondary-700 duration-300 transform -translate-y-7 scale-75 top-3 left-1 z-10 origin-[0] peer-focus:left-1 peer-focus:text-amcovad-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}
      >
        {label}
      </label>
      {Icon && (
        <span className="absolute top-4 right-2 cursor-pointer" data-testid="icon">
          {Icon}
        </span>
      )}

      {errors?.[name] && (
        <div className="text-amcovad-danger py-1">
          <p>{errors?.[name]?.message}</p>
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string
  }),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  label: null,
  type: 'text',
  placeholder: null
};
export default Input;
