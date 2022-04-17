import React from 'react';
import { DatePicker } from 'rsuite';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';
import PropTypes from 'prop-types';

const Datepicker = ({ name, placeholder }) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            size="lg"
            oneTap
            format="dd-MM-yyyy"
            isoWeek
            appearance="default"
            placeholder={placeholder}
            style={{ width: '100%' }}
            value={field.value}
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <ErrorMessage name={name} />
    </>
  );
};

Datepicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

Datepicker.defaultProps = {
  placeholder: null
};

export default Datepicker;
