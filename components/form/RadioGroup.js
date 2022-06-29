import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ErrorMessage } from '.';
import { Label } from './Label';
import classNames from 'classnames';

export function Radio({ checked, checkIcon, disabled, label, name, radioClassName, size, value }) {
  const iconName = {
    radio: {
      sm: 'bg-radio-sm',
      md: 'bg-radio-md'
    },
    'disabled-radio': {
      sm: 'bg-radio-sm-disabled',
      md: 'bg-radio-md-disabled'
    },
    'checked-radio': {
      sm: 'bg-checked-radio-sm',
      md: 'bg-checked-radio-md'
    },
    'disabled-checked-radio': {
      sm: 'bg-checked-radio-sm-disabled',
      md: 'bg-checked-radio-md-disabled'
    }
  };

  const iconClass = checkIcon ? 'checked-radio' : 'radio';
  const iconClassDisabled = disabled && checked && !checkIcon ? 'disabled-radio' : 'disabled-checked-radio';
  const iconClassDisabledOnly = disabled && !checked && !checkIcon ? 'disabled-radio' : 'disabled-checked-radio';
  const { register } = useFormContext();
  return (
    <>
      <div className="inline-flex items-center">
        <input
          checked={checked}
          disabled={disabled}
          className={`form-radio ${
            checkIcon
              ? 'checked:bg-primary-500 checked:hover:bg-primary-500 checked:hover:border-primary-500 checked:focus:bg-primary-500 checked:focus:border-primary-500 disabled:checked:bg-secondary-25'
              : 'checked:bg-secondary-25 checked:hover:bg-secondary-25 checked:hover:border-primary-500 checked:focus:bg-secondary-25 checked:focus:border-primary-500 '
          }  ${disabled && checked && checkIcon ? 'checked:bg-secondary-25' : ''}
          disabled:bg-secondary-25 disabled:border-secondary-100 disabled:hover:bg-secondary-25 disabled:hover:border-secondary-100 ${
            disabled && !checked
              ? `disabled:${iconName[iconClassDisabledOnly][size]}`
              : `checked:${iconName[iconClassDisabledOnly][size]}`
          } ${
            disabled && checked
              ? `disabled:${iconName[iconClassDisabled][size]}`
              : `checked:${iconName[iconClass][size]}`
          }
          ${size === 'md' ? 'w-5 h-5' : 'w-4 h-4'} ${radioClassName}`}
          id={`radio-${value}`}
          name={name}
          {...register(name)}
          type="radio"
          value={value}
        />
        <Label name={name} htmlFor={`radio-${value}`} text={label} className="mx-2 mb-0" />
      </div>
    </>
  );
}
Radio.propTypes = {
  checked: PropTypes.bool,
  checkIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  radioClassName: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string
};
Radio.defaultProps = {
  checked: null,
  checkIcon: false,
  disabled: false,
  label: null,
  name: '',
  radioClassName: '',
  size: 'sm',
  value: ''
};

// Radio.propTypes = {
//   label: PropTypes.node.isRequired,
//   name: PropTypes.string,
//   value: PropTypes.any
// };
// Radio.defaultProps = {
//   name: null,
//   value: null
// };

const RadioGroup = ({ checked, checkIcon, columns, disabled, name, options, radioClassName, size }) => {
  return (
    <>
      <div className={classNames('flex flex-wrap ', { 'flex-col gap-2': columns })}>
        {options.map(({ label, value }, index) => {
          if (!value && !label) return null;
          const optionLabel = label || value;
          const optionValue = value || label;

          return (
            <Radio
              checked={checked}
              disabled={disabled}
              checkIcon={checkIcon}
              size={size}
              key={index}
              name={name}
              radioClassName={radioClassName}
              value={optionValue}
              label={optionLabel}
            />
          );
        })}
      </div>
      <ErrorMessage name={name} />
    </>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};
RadioGroup.defaultProps = {
  options: []
};

export default RadioGroup;
