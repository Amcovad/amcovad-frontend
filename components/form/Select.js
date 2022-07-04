import React from 'react';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { SelectArrowIcon, HelpIcon, HintIcon, SuccessIcon } from '@/public/assets/dashboard/navBarIcon';

export function SelectField({
  children,
  className,
  containerClassName,
  floatLabel,
  label,
  labelClassName,
  leadingIcon,
  name,
  hintIcon,
  hintText
}) {
  const {
    register,
    formState: { dirtyFields, errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && <Label className="text-base" name={name} htmlFor={name} text={label} />}
      <div className={classNames('relative z-0 mb-2 w-full group', containerClassName)}>
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{leadingIcon}</div>
        )}
        <select
          id={name}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-2 w-full text-base appearance-none transition ease-in-out bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer',
            className,
            { 'pl-10 pr-8': leadingIcon },
            {
              'mt-6 placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer':
                floatLabel
            },
            {
              'border-danger-500 focus:border-danger-200 focus:ring-danger-200 focus:shadow-danger-xs': hasErrors
            },
            {
              'border-success-500 focus:border-success-200 focus:ring-success-200 focus:shadow-success-xs': isValid
            },
            {
              'focus:border-primary-200 focus:ring-primary-200 focus:shadow-primary-sm': !hasErrors && !isValid
            }
          )}
        >
          {children}
        </select>

        {floatLabel && <Label name={name} htmlFor={name} floatLabel text={label} floatLabelClass={labelClassName} />}

        <div className={classNames('absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none')}>
          <SelectArrowIcon />
        </div>
        {hintIcon && !isValid && (
          <div
            className={classNames('absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none', {
              hidden: hintIcon === hasErrors
            })}
          >
            <HintIcon />
          </div>
        )}

        {hasErrors && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
            <HelpIcon />
          </div>
        )}

        {isValid && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
            <SuccessIcon />
          </div>
        )}
      </div>
      {hintText && <p className="pt-1 text-sm text-secondary-700">{hintText} </p>}
    </>
  );
}

const Select = ({ defaultOption, floatLabel, label, leadingIcon, name, options, hintIcon, hintText }) => {
  return (
    <>
      <SelectField
        floatLabel={floatLabel}
        label={label ? label : defaultOption}
        leadingIcon={leadingIcon}
        name={name}
        hintIcon={hintIcon}
        hintText={hintText}
      >
        {defaultOption && (
          <option key={name} value="">
            {defaultOption}
          </option>
        )}
        {options.map(({ title, value }, id) => {
          if (!value || !title) return null;
          const optionTitle = title || value;
          const optionValue = value || title;
          return (
            <option key={id} value={optionValue}>
              {optionTitle}
            </option>
          );
        })}
      </SelectField>
      <ErrorMessage name={name} />
    </>
  );
};

export default Select;

Select.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  defaultOption: null,
  label: null,
  options: []
};
