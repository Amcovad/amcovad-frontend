import React from 'react';
import { DatePicker } from 'rsuite';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from './Label';

const Datepicker = ({ name, label, labelClassName, placeholder }) => {
  const { control } = useFormContext();
  return (
    <>
      {label && (
        <Label
          name={name}
          htmlFor={name}
          text={label}
          className={classNames('text-sm text-secondary-700', labelClassName)}
        />
      )}
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
  label: PropTypes.string,
  placeholder: PropTypes.string
};

Datepicker.defaultProps = {
  label: null,
  placeholder: null
};

export default Datepicker;
