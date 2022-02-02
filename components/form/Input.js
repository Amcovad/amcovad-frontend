import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, Icon, label, name, placeholder, type }) => {
  return (
 
      <div className="flex relative">
        <input
          className={`h-12 outline-none px-2 w-full bg-[#D6D9DD] mt-8 rounded-md pr-8 border border-[#D6D9DD] transition-all ${className}`}
          name={name}
          placeholder={label ? null : placeholder}
          type={type}
          required
          id={name}
        />
        <label
          htmlFor={name}
          className="text-sm absolute top-11 text-[#344055] left-2 pointer-events-none transition-all"
        >
          {label}
        </label>
        {Icon && (
          <span className="absolute top-12 right-2 cursor-pointer" data-testid="icon">
            {Icon}
          </span>
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
