import React from 'react';
import * as yup from 'yup';
import { Button, Footer, Input, Navbar, Textarea } from '@/components/index';

import HookForm from '@/components/form/Form';
import contactImg from '../public/assets/contact/contact-img.png';
import smContactImg from '../public/assets/contact/sm-contact-img.png';

import Image from 'next/image';

const Contact = () => {
  const contactUsSchema = yup
    .object({
      fullName: yup
        .string()
        .required('Full name is required')
        .min(4, 'Mininum 4 characters')
        .max(40, 'Maximum 30 characters'),

      email: yup.string().email('Kindly provide a valid email').required('Email is required'),
      phone: yup
        .string()
        .required('Phone number is required')
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'Phone number is not valid'
        )
        .min(11, 'Mininum of 11 numbers '),
      subject: yup.string().required('Subject is required'),
      message: yup.string().required('Message is required').min(50)
    })
    .required();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <Navbar />
      <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
        <div className="w-screen mx-auto">
          <div className="hidden md:block w-full pt-12">
            <Image src={contactImg} alt="contact page image" />
          </div>
          <div className="md:hidden w-full pt-4">
            <Image
              src={smContactImg}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="small contact hero image"
            />
          </div>
        </div>
        <div className="pt-4 lg:pt-12 pb-12 px-4">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
            <div className="w-full lg:w-2/3">
              <div className=" md:px-12 lg:px-0 lg:pl-20 ">
                <h1 className="text-2xl font-semibold text-amcovad-secondary-600 ">Fill the contact form</h1>
                <p className="text-sm py-6 font-normal text-amcovad-secondary-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet in fames bibendum rhoncus, sit.
                  Turpis est nam pellentesque fames.
                </p>
                <HookForm onSubmit={onSubmit} schema={contactUsSchema}>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-2">
                      <Input label="Your name here" className="!bg-amcovad-secondary-200" name="fullName" type="text" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <Input label="Your email" className="!bg-amcovad-secondary-200" name="email" type="text" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <Input label="Phone" className="!bg-amcovad-secondary-200" name="phone" type="number" />
                    </div>

                    <div className="col-span-full ">
                      <Input label="Subject" className="!bg-amcovad-secondary-200" name="subject" type="text" />
                    </div>
                    <div className="col-span-full">
                      <Textarea label="Your message" name="message" className="bg-amcovad-secondary-200" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button className="text-white lg:h-12 lg:px-8  ">Send message</Button>
                  </div>
                </HookForm>
              </div>
            </div>
            <div className="mr-8 w-full md:w-1/3 px-8 hidden lg:block ">
              <h1 className="text-2xl font-semibold text-amcovad-secondary-600">HEADQUARTER</h1>
              <div className="pt-4">
                <h2 className="text-lg font-bold pb-1 text-amcovad-secondary-600">Lagos Address</h2>
                <p className="text-base font-semibold pb-3 text-[#5A6D77]"> 3rd Floor, Central District Area, Abuja.</p>
              </div>
              <div className="text-base font-semibold text-[#5A6D77]">
                <p>
                  <b className="text-amcovad-primary-500 pb-4">Tel:</b> 08055xxxxxxxxx, 08022xxxxxxxxxxx
                </p>
                <p>
                  <b className="text-amcovad-primary-500">Email:</b> amcovad@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
