import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ Icon, label, name, type }) => {
  return (
    <div className="w-1/3 mx-2">
      <div className="flex relative">
        <input
          className="h-12 outline-none px-2 w-full bg-[#D6D9DD] mt-8 rounded-md pr-8 border border-[#D6D9DD] transition-all "
          name={name}
          type={type}
          required
        />
        <label className="text-sm absolute top-11 text-[#344055] left-2 pointer-events-none transition-all">
          {label}
        </label>
        <span className="absolute top-12 right-2 cursor-pointer ">{Icon}</span>
      </div>
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};
export default Input;
