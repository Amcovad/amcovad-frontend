import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';
import { Button, Input, MnavBar } from '@/components/index';
import HookForm from '@/components/form/Form';
import { LogoBlack, SignInImage } from '../assets';

const SignIn = () => {
  const SignInSchema = yup
    .object({
      email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
      password: yup.string().required('password is required').min(6, 'Password must be atleast 6 character long')
    })
    .required();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="max-w-screen-2xl">
        <section className="lg:bg-amcovad-primary-500 overflow-hidden max-w-[84rem] ">
          <div className=" bg-cover pb-24 lg:pb-0 bg-[url('../assets/images/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../assets/images/hexagons.png')]">
            <MnavBar />
            <div className="flex ">
              <div className="flex flex-col justify-center flex-1 px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
                <div className="w-full max-w-[43rem] lg:w-[38rem]  mx-auto pt-5 lg:pt-0 ">
                  <div className="relative lg:py-10 lg:px-8 lg:my-4 lg:max-w-[38rem] lg:w-[580px]">
                    <div className=" hidden lg:block absolute left-3 top-[-8px]">
                      <Image src={LogoBlack} alt="black logo" />
                    </div>
                    <div className="bg-amcovad-secondary-100 p-6 lg:p-8 ">
                      <div>
                        <h2 className=" font-RozhaOne max-w-[300px] md:max-w-[424px] text-2xl md:text-4xl font-extrabold lg:font-bold text-amcovad-tertiary pb-2">
                          Get your transactions covered and secured.
                        </h2>
                        <p className="text-amcovad-secondary-700 text-[14px]">
                          Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui
                          officia. Salutantibus vitae elit libero, a pharetra augue.
                        </p>
                      </div>
                      <div className="mt-8">
                        <HookForm onSubmit={onSubmit} schema={SignInSchema}>
                          <Input label="Email address" name="email" type="email" />
                          <Input label="Password" name="password" type="password" />

                          <div className="flex items-center  mb-3">
                            <label
                              htmlFor="forgot password"
                              className="block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter "
                            >
                              <a href="#" className=" text-amcovad-black ">
                                Forgot password?
                              </a>
                            </label>
                          </div>
                          <div>
                            <Button className=" w-full font-[600] text-amcovad-black"> Sign in</Button>
                          </div>
                        </HookForm>
                        <p className="block ml-2 text-center text-[14px] text-[#344055] font-normal font-Inter ">
                          Don’t have account?{' '}
                          <Link href="/sign-up">
                            <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">Sign Up</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:flex flex-1 hidden lg:w-screen ">
                <Image src={SignInImage} alt=" Sign up image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
