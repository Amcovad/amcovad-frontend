import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
export function Checkbox({ name, label, value }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  if (!value && !label) return null;
  return (
    <>
      <div className="flex items-center">
        <input
          id={`options-${value}`}
          className="w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 "
          name={name}
          type="checkbox"
          value={value}
          {...register(name)}
        />
        <label
          htmlFor={`options-${value}`}
          className="block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter "
        >
          {label}
        </label>
      </div>
    </>
  );
}

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.any.isRequired
};
Checkbox.defaultProps = {
  name: null
};

export function CheckBoxGroup({ name, options }) {
  const {
    formState: { errors }
  } = useFormContext();
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value && !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return <Checkbox key={index} name={name} value={optionValue} label={optionLabel} />;
      })}
      {errors?.[name] && <span className="text-amcovad-danger py-1 text-sm "> {errors?.[name]?.message}</span>}
    </>
  );
}
