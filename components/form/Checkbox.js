import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const Checkbox = ({ name, other, type }) => {
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
        {other}
      </div>
      {errors?.[name] && <span className="text-amcovad-danger py-1 text-sm ">{errors?.[name]?.message}</span>}
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string
};
Checkbox.defaultProps = {
  type: 'checkbox'
};

export default Checkbox;
