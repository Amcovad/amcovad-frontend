import React from 'react';
import Image from 'next/image';
import Button from '../form/Button';
import Lock from '../../public/assets/hero/lock.png';

const WelcomeArea = () => {
  return (
    <section className=" bg-cover py-2 md:py-10 lg:pb-28  bg-top bg-opacity-20 bg-[url('../public/assets/signUp/hexagons.png')] md:px-0">
      <div className="px-4 py-12 mt-24 lg:mt-0 xl:py-28  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6 pl-1 lg:px-4 md:px-0">
              <div className="w-full pb-6 space-y-6 sm:max-w-md md:max-w-full  lg:max-w-lg xl:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 lg:pl-8 xl:pl-0">
                <h1 className="max-w-[284px] md:max-w-[400px] xl:max-w-[480px] text-4xl font-RozhaOne font-extrabold tracking-tight text-amcovad-primary-500  md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block ">Digital approach to a secure deal & transactions</span>
                </h1>
                <p className="text-amcovad-tertiary font-Inter text-sm  font-normal mx-auto sm:max-w-md lg:text-xl md:max-w-3xl">
                  Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia.
                  Salutantibus vitae elit libero, a pharetra augue.
                </p>
                <Button>Start now</Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block ">
            <div className=" w-[70%] h-auto mx-auto overflow-hidden ">
              <Image src={Lock} alt="lock" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
