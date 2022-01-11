import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ Icon, label, name, placeholder, type }) => {
  return (
    <div className="w-1/3">
      <div className="relative text-[#344055]">
        <input
          className="w-full h-10 pl-3 pr-8 text-base bg-[#D6D9DD] placeholder-[#344055] border rounded-md focus:shadow-outline"
          label={label}
          name={name}
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">{Icon}</div>
      </div>
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};
export default Input;
