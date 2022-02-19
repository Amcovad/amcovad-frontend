import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { CheckboxLabel, ErrorLabel } from '.';

export function Checkbox({ ...props }) {
  const { register } = useFormContext();
  return (
    <>
      <div className={`flex items-center ${props.className}`}>
        <input
          id={`checkbox-${props.value}`}
          className="w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 "
          name={props.name}
          type="checkbox"
          {...register(props.name)}
          value={props.value}
        />
        <CheckboxLabel htmlFor={`checkbox-${props.value}`} label={props.label} />
      </div>
    </>
  );
}
export function CheckboxGroup({ name, label, value }) {
  return (
    <>
      <Checkbox name={name} value={value} label={label} />
      <ErrorLabel name={name} className="text-sm" />
    </>
  );
}

CheckboxGroup.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.any
};
CheckboxGroup.defaultProps = {
  name: null,
  value: true
};

export function CheckboxGroups({ name, options }) {
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value && !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return <Checkbox key={index} name={name} value={optionValue} label={optionLabel} className="pb-1" />;
      })}
      <ErrorLabel name={name} className="text-sm" />
    </>
  );
}

CheckboxGroups.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};
CheckboxGroups.defaultProps = {
  name: null
};
