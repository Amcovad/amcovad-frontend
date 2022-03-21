import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input, Label, Navbar } from '@/components/index';
import HookForm from '@/components/form/Form';
import { LogoBlack, SignInImage } from '/public/assets/signUp';
import { SignInSchema } from '../schema/authSchema';

const SignIn = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="w-full 2xl:mx-auto 2xl:container">
        <section className="lg:bg-amcovad-primary-500 overflow-hidden max-w-full ">
          <div className=" bg-cover pb-24 lg:pb-0 bg-[url('../public/assets/signUp/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../public/assets/signUp/hexagons.png')]">
            <Navbar authPageOnly />
            <div className="flex ">
              <div className="flex flex-col justify-center flex-1 px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
                <div className="w-full max-w-[43rem] lg:w-[38rem]  mx-auto pt-5 lg:pt-0 ">
                  <div className="relative lg:py-10 lg:px-8 lg:my-4 lg:max-w-[38rem] lg:w-[580px]">
                    <Link passHref href="/">
                      <a className=" hidden lg:block absolute left-3 top-[-8px] cursor-pointer">
                        <Image src={LogoBlack} alt="black logo" />
                      </a>
                    </Link>
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
                          <div className="mb-6">
                            <Input label="Email address" name="email" type="email" />
                          </div>
                          <Input label="Password" name="password" type="password" />
                          <div className="flex items-center  mb-3">
                            <Label
                              className="mt-[-10px] mb-4 text-sm"
                              htmlFor="forgot password"
                              name="forgotPassword"
                              text={
                                <Link href="forgot-password" passHref>
                                  Forgot password?
                                </Link>
                              }
                            />
                          </div>
                          <div>
                            <Button className="w-full font-semibold text-amcovad-black py-2.5 px-5">Sign in</Button>
                          </div>
                        </HookForm>
                        <p className="block pt-2 text-center text-base text-amcovad-secondary-700 font-normal font-Inter ">
                          Don’t have account?{' '}
                          <Link href="/sign-up">
                            <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                              <b>Sign Up</b>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:flex justify-end hidden lg:w-screen lg bottom-0 ">
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
