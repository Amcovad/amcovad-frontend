import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './ErrorMessage';
import { useFormContext } from 'react-hook-form';

export function SelectField({ label, name, ...options }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  const errorClass = hasErrors ? 'focus:border-amcovad-danger' : 'focus:border-amcovad-primary-500';

  const style = {
    container: `relative my-1 `,
    default: `${errorClass} relative flex flex-1 w-full mt-1 rounded-md py-2 px-2 bg-transparent text-amcovad-secondary-700 placeholder-amcovad-secondary-700 border border-amcovad-secondary-300 text-base focus:outline-none focus:ring-1 peer border-2 `
  };

  return (
    <div className={`${style.container}`}>
      <label htmlFor={name} className="text-amcovad-secondary-700 text-sm font-Inter ">
        {label}
      </label>
      <select className={`${style.default}`} {...register(name)} id={name} name={name} {...options}></select>
    </div>
  );
}

const Select = ({ label, name, options }) => {
  return (
    <>
      <SelectField label={label} name={name}>
        <option value=""> Select an option..</option>
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
      <ErrorMessage name={name} errorClassName="text-sm" />
    </>
  );
};

export default Select;

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  label: null,
  options: []
};
