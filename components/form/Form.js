import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const HookForm = ({
  onSubmit,
  children,
  schema,
  defaultValues = { email: '', password: '', confirmPassword: '', acceptTerms: false }
}) => {
  const methods = useForm({
    // mode: 'onTouched',
    mode: 'onChange',
    // reValidateMode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
export default HookForm;
