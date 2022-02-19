import React from 'react';
import Image from 'next/image';
import { Button, Checkbox, CheckboxGroup, Input, MnavBar, RadioButton, RadioButtonGroup } from '@/components/index';
import * as yup from 'yup';
import HookForm from '@/components/form/Form';

import { LogoBlack, SignUpImage } from '../assets';

const SignUp = () => {
  const SignUpSchema = yup
    .object({
      email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
      password: yup
        .string()
        .required('password is required')
        .min(6, 'Password should be of minimum 6 characters length'),
      confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], "Password's not match"),
      acceptTerms: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
      agreeContact: yup.boolean(),
      acceptMulti: yup
        .array()
        .min(1, 'Must Accept Terms and Conditions')
        .required('At least one checkbox is required')
        .nullable(),
      radioGroup: yup.string().required('A radio option is required').nullable(),
      radioGroup1: yup.string().required('A radio group option is required').nullable()
    })
    .required();

  const output = [
    {
      label: ' I have read, and I agree to the Terms of Service and Privacy Policy',
      value: 'acceptTerms'
    },
    { label: 'I agree to be contacted by amcovad', value: 'agreeContact' }
  ];

  const outputsample = [
    {
      label: 'Privacy Policy',
      value: 'PrivacyPolicy'
    },
    { label: ' Sign amcovad', value: 'Signamcovad' },
    { label: ' Sign in Today', value: 'SigninToday' }
  ];
  const onSubmit = (data) => {
    console.log(onSubmit);
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className="max-w-screen-2xl">
        <section className="lg:bg-amcovad-primary-500 overflow-hidden  max-w-[84rem]">
          <div className=" bg-cover bg-[url('../assets/images/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../assets/images/hexagons.png')]">
            <MnavBar />
            <div className="flex ">
              <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
                <div className="w-full max-w-[43rem] lg:w-[38rem]  mx-auto pt-5 lg:pt-0 ">
                  <div className="relative lg:py-10 lg:px-8 lg:my-4 lg:max-w-[38rem] lg:w-[580px]">
                    <div className=" hidden lg:block absolute left-3 top-[-8px]">
                      <Image src={LogoBlack} alt="black logo" />
                    </div>
                    <div className="bg-amcovad-secondary-100  p-6 lg:p-8 ">
                      <div className="mb-8">
                        <h2 className=" font-RozhaOne max-w-[300px] md:max-w-[424px] text-2xl md:text-4xl font-extrabold lg:font-bold text-amcovad-tertiary pb-2">
                          Get your transactions covered and secured.
                        </h2>
                        <p className="text-amcovad-secondary-700 text-[14px]">
                          Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui
                          officia. Salutantibus vitae elit libero, a pharetra augue.
                        </p>
                      </div>
                      <HookForm onSubmit={onSubmit} schema={SignUpSchema}>
                        <Input label="Email address" name="email" type="email" />

                        <Input label="Password" name="password" type="password" />

                        <Input label="Confirm Password" name="confirmPassword" type="password" />

                        <div className=" mt-8 mb-3">
                          <CheckboxGroup name="acceptMulti" options={output} />
                          <Checkbox
                            name="acceptTerms"
                            label={
                              <label>
                                I have read, and I agree to the
                                <a href="#" className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                                  {' '}
                                  Terms of Service{' '}
                                </a>
                                and{' '}
                                <a href="#" className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                                  Privacy Policy
                                </a>
                              </label>
                            }
                          />
                        </div>
                        <div className="mt-3 mb-6">
                          <Checkbox
                            name="agreeContact"
                            label={
                              <label>
                                I agree to be contacted by
                                <a href="#" className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                                  {' '}
                                  amcovad
                                </a>
                              </label>
                            }
                          />
                        </div>
                        <RadioButton name="radioGroup" label="Amcovad radio" value="radioGroup" />
                        <div className="flex flex-row flex-wrap mb-2">
                          <RadioButtonGroup name="radioGroup1" options={outputsample} />
                        </div>

                        <div>
                          <Button className=" w-full font-[600] text-amcovad-secondary-700">Create account</Button>
                        </div>
                      </HookForm>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:flex flex-1 hidden lg:w-screen bottom-0 ">
                <Image src={SignUpImage} alt=" Sign up image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
