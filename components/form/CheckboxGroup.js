import React from 'react';
import { useFormContext } from 'react-hook-form';
import propTypes from 'prop-types';
import { Label, ErrorMessage } from '.';

export function Checkbox({ containerClassName, inputClassName, label, name, value }) {
  const { register } = useFormContext();
  return (
    <>
      <div className={`flex items-center ${containerClassName}`}>
        <input
          id={`checkbox-${name}-${value.toString()}`}
          className={`w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 ${inputClassName} `}
          name={name}
          type="checkbox"
          {...register(name)}
          value={value}
        />
        <Label name={name} htmlFor={`checkbox-${name}-${value.toString()}`} text={label} />
      </div>
    </>
  );
}
export function CheckboxGroup({ name, options }) {
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value || !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return <Checkbox key={index} name={name} value={optionValue} label={optionLabel} containerClassName="pb-1" />;
      })}
      <ErrorMessage name={name} errorClassName="text-sm" />
    </>
  );
}

CheckboxGroup.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.array
};
CheckboxGroup.defaultProps = {
  options: null
};
