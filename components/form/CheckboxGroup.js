import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label, ErrorLabel } from '.';

export function Checkbox({ containerClassName, inputClassName, text, name, value }) {
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
        <Label name={name} htmlFor={`checkbox-${name}-${value.toString()}`} text={text} />
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
        return <Checkbox key={index} name={name} value={optionValue} text={optionLabel} containerClassName="pb-1" />;
      })}
      <ErrorLabel name={name} errorClassName="text-sm" />
    </>
  );
}

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};
CheckboxGroup.defaultProps = {
  label: null,
  value: null
};
