import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input, Navbar } from '@/components/index';
import HookForm from '@/components/form/Form';
import { LogoBlack } from '/public/assets/signUp';
import { ForgotPasswordSchema } from '../schema/authSchema';
import AuthPage from '@/components/AuthPage';

const ForgotPassword = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <AuthPage
      heading="Forgot your password?"
      paragraph=" Please enter the email address associated with your account and We will email you a link to reset your password."
    >
      <div className="mt-8">
        <HookForm onSubmit={onSubmit} schema={ForgotPasswordSchema}>
          <div className="mb-6">
            <Input label="Email address" name="email" type="email" />
          </div>

          <Button className="w-full font-semibold text-amcovad-black py-2.5 px-5">Reset Password </Button>
        </HookForm>
        <p className="block pt-2 text-center text-base text-amcovad-secondary-700 font-normal font-Inter ">
          <Link href="/sign-in">
            <a className=" text-amcovad-secondary-700 hover:text-amcovad-primary-500">Back to Sign In</a>
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};

export default ForgotPassword;
