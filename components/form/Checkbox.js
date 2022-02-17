import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
export function Checkbox({ name, label, type }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <div className="flex items-center">
        <input
          name={name}
          type={type}
          className="w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 "
          {...register(name)}
        />
        {label}
      </div>
      {errors?.[name] && <span className="text-amcovad-danger py-1 text-sm ">{errors?.[name]?.message}</span>}
    </>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string
};
Checkbox.defaultProps = {
  type: 'checkbox'
};

export function CheckBoxGroup({ options }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <>
      {options.map((option) => (
        <>
          <div className="flex items-center mb-3">
            <input
              key={option}
              name={option.name}
              value={option.value}
              type="checkbox"
              className="w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 "
              {...register(option.name)}
            />
            <label htmlFor="sign-up" className="block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter ">
              {option.label}
            </label>
          </div>
          {errors?.[option.name] && (
            <span className="text-amcovad-danger py-1 text-sm ">{errors?.[option.name]?.message}</span>
          )}
        </>
      ))}
    </>
  );
}
