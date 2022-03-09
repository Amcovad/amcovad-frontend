import React from 'react';
import Image from 'next/image';
import Phone from '../../public/assets/hero/phone.png';

const HowItWork = () => {
  return (
    <section className="text-amcovad-secondary-300 bg-amcovad-secondary-100 lg:bg-gradient-section ">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2 lg">
          <div className="lg:p-12 xl:p-0">
            <div className="w-full relative pb-6 my-20 sm:pr-5 lg:pr-0 md:pb-0">
              <div className="px-2 max-w-[300.96px] md:max-w-[400px] lg:max-w-[387px]">
                <h1 className=" pb-8 lg:pb-12  text-4xl font-RozhaOne  font-extrabold tracking-tight text-amcovad-secondary-600 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block">
                    How <span className="text-amcovad-primary-500">Amcovad </span>secure your transactions.
                  </span>
                </h1>
              </div>

              <p className="text-amcovad-secondary-700 z-10 pl-16 pb-4 font-Inter text-[13.6833px] md:text-sm lg:text-base font-[700] mx-auto sm:max-w-md  md:max-w-3xl">
                Setup your account
              </p>
              <p className="max-w-[20.25rem] md:max-w-[27rem] lg:max-w-[23.6875rem] z-10 text-[13.6833px] md:text-sm lg:text-base  text-amcovad-secondary-600 font-Inter font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum et accumsan nulla posuere aliquet ac
                eleifend erat viverra. Nisi maecenas laoreet aenean suscipit. Blandit at vulputate non nunc, mollis amet
              </p>

              <span className="font-['Inter'] block text-[15.5rem] md:text-[12.5rem] lg:text-[16rem] left-[-1.3125rem] md:left-[-0.625rem] lg:left-[-1.625rem] top-[3rem] md:top-[1.5rem] lg:top-20 xl:top-[7.6rem] absolute font-normal text-amcovad-black opacity-10">
                1
              </span>
            </div>
          </div>

          <div className="hidden w-[75%] mx-auto lg:flex justify-center items-center pr-5 ">
            <Image src={Phone} height="650" width="395" alt="phone image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
