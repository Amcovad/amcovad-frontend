import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from 'rsuite';

const Date = () => {
  const { handleSubmit, control } = useForm({ defaultValue: '' });
  const [data, setData] = useState(null);

  console.log(data);

  return (
    <form onSubmit={handleSubmit((data) => setData(data))}>
      <div className="container">
        <section className="p=10 flex items-center gap-2">
          <label>Rsuite React Datepicker</label>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field }) => (
              <DatePicker
                size="lg"
                oneTap
                format="dd-MM-yyyy"
                isoWeek
                appearance="default"
                placeholder="Pick a Date options"
                style={{ width: '50%' }}
                onChange={(e) => field.onChange(e)}
                value={field.value}
              />
            )}
          />
        </section>
      </div>
      <button className="button p-2 ml-40 mt-2 bg-amcovad-primary-500 rounded text-white">Submit</button>
    </form>
  );
};
export default Date;
