import React from 'react';
import { DatePicker } from 'rsuite';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';

const Datepicker = ({ name }) => {
  const { control } = useForm();
  const { register } = useFormContext();
  return (
    <>
      <Controller
        {...register(name)}
        control={control}
        defaultValues={null}
        render={({ field }) => (
          <DatePicker
            size="lg"
            oneTap
            format="dd-MM-yyyy"
            isoWeek
            onChange={(e) => field.onChange(e)}
            value={field.value ? new Date(field.value) : field.value}
            {...field}
            appearance="default"
            placeholder="Pick a Date options"
            style={{ width: '100%' }}
          />
        )}
      />
      <ErrorMessage name={name} />
    </>
  );
};

export default Datepicker;
