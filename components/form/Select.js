import React from 'react';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { BlackCaret } from '@/public/assets/dashboard/navBarIcon';
export function SelectField({ children, className, containerClassName, label, labelClassName, name }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  return (
    <div className={classNames('relative ', containerClassName)}>
      {label && <Label name={name} htmlFor={name} text={label} className={classNames('text-sm', labelClassName)} />}
      <div className="flex justify-center items-center">
        <select
          className={classNames(
            'relative flex flex-1 w-full rounded-md p-3.5 appearance-none transition ease-in-out bg-transparent text-amcovad-secondary-700 placeholder-amcovad-secondary-700 border-amcovad-secondary-300 text-base focus:outline-none border-2',
            className,
            { 'focus:border-amcovad-danger border-amcovad-danger': hasErrors },
            { 'focus:border-amcovad-primary-500': !hasErrors }
          )}
          {...register(name)}
          id={name}
        >
          {children}
        </select>
        <span className="absolute right-4 pointer-events-none " data-testid="icon">
          <BlackCaret />
        </span>
      </div>
    </div>
  );
}

const Select = ({ defaultOption, label, name, options }) => {
  return (
    <>
      <SelectField label={label} name={name}>
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
