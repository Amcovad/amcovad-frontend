import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ErrorLabel } from '.';

export function RadioInput({ ...props }) {
  const { register } = useFormContext();
  return (
    <>
      <div className="flex my-1 items-center ">
        <div className="flex items-center space-x-1 mr-2">
          <input
            className="cursor-pointer"
            id={`radio-${props.value}`}
            name={props.name}
            {...register(props.name)}
            type="radio"
            value={props.value}
          />
          <label
            htmlFor={`radio-${props.value}`}
            className="cursor-pointer text-[0.875rem] text-[#344055] font-normal font-Inter "
          >
            {props.label}
          </label>
        </div>
      </div>
    </>
  );
}
export function RadioButton({ name, label, value }) {
  return (
    <>
      <RadioInput name={name} value={value} label={label} />
      <ErrorLabel name={name} className="text-sm" />
    </>
  );
}

RadioButton.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.any
};
RadioButton.defaultProps = {
  name: null,
  value: true
};

export function RadioButtonGroup({ name, options }) {
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value && !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return <RadioInput key={index} name={name} value={optionValue} label={optionLabel} />;
      })}
      <ErrorLabel name={name} className="text-sm" />
    </>
  );
}

RadioButtonGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};
RadioButtonGroup.defaultProps = {
  name: null
};
