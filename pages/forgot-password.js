import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input, Navbar } from '@/components/index';
import HookForm from '@/components/form/Form';
import { LogoBlack } from '/public/assets/signUp';
import { ForgotPasswordSchema } from '../schema/authSchema';

const ForgotPassword = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="w-full 2xl:mx-auto 2xl:container">
        <section className=" lg:bg-amcovad-primary-400  overflow-hidden max-w-full h-screen">
          <div className=" lg:h-screen bg-cover pb-24 lg:pb-0 bg-[url('../public/assets/signUp/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../public/assets/signUp/hexagons.png')]">
            <Navbar authPageOnly />
            <div className="flex ">
              <div className="flex flex-col justify-center flex-1 px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24 lg:mx-auto lg:mt-20 2xl:mt-60">
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
                          Forgot your password?
                        </h2>
                        <p className="text-amcovad-secondary-700 text-[14px]">
                          Please enter the email address associated with your account and We will email you a link to
                          reset your password.
                        </p>
                      </div>
                      <div className="mt-8">
                        <HookForm onSubmit={onSubmit} schema={ForgotPasswordSchema}>
                          <div className="mb-6">
                            <Input label="Email address" name="email" type="email" />
                          </div>

                          <Button className="w-full font-semibold text-amcovad-black py-2.5 px-5">
                            Reset Password{' '}
                          </Button>
                        </HookForm>
                        <p className="block pt-2 text-center text-base text-amcovad-secondary-700 font-normal font-Inter ">
                          <Link href="/sign-in">
                            <a className=" text-amcovad-secondary-700 hover:text-amcovad-primary-500">
                              Back to Sign In
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
