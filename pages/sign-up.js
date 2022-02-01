import React from 'react';
import Image from 'next/image';
import { Button, Input, MnavBar } from '@/components/index';

import { LogoBlack, SignUpImage } from '../assets';
import { PasswordCheckIcon } from '../assets/svgs/svgs';
const SignUp = () => {
  return (
    <>
      <section className="lg:bg-amcovad-primary-500 overflow-hidden min-h-screen">
        <div className=" bg-cover bg-[url('../assets/images/md-hexagons.png')] bg-top bg-opacity-20 lg:bg-[url('../assets/images/hexagons.png')]">
          <MnavBar />
          <div className="flex ">
            <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
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
                    <div className="">
                      <form action="#" method="POST" className="space-y-1">
                        <div>
                          <Input label="Email address" name="email" type="email" className="w-full" />
                        </div>
                        <div className="">
                          <Input
                            label="Password"
                            name="password"
                            type="password"
                            Icon={<PasswordCheckIcon width="18px" height="18px" fill="#292D32" />}
                          />
                        </div>
                        <div className="">
                          <Input
                            label="Confirm Password"
                            name="confirm-password"
                            type="password"
                            Icon={<PasswordCheckIcon width="18px" height="18px" fill="#292D32" />}
                          />
                        </div>
                        <div className="">
                          <div className="flex items-center mt-8 mb-3">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              placeholder="Your password"
                              className="w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 "
                            />
                            <label
                              htmlFor="remember-me"
                              className="block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter "
                            >
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
                          </div>
                          <div className="flex items-center mt-3 mb-6">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              placeholder="Your password"
                              className="w-4 h-4 text-amcovad-primary-400 border-gray-200 rounded focus:ring-amcovad-primary-300 "
                            />
                            <label
                              htmlFor="remember-me"
                              className="block ml-2 text-[0.75rem] text-[#344055] font-normal font-Inter "
                            >
                              I agree to be contacted by
                              <a href="#" className=" text-amcovad-primary-400 hover:text-amcovad-primary-500">
                                {' '}
                                amcovad{' '}
                              </a>
                            </label>
                          </div>
                        </div>
                        <div>
                          <Button className=" w-full font-[600] text-amcovad-secondary-700">Create account</Button>
                        </div>
                      </form>
                    </div>
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
    </>
  );
};

export default SignUp;
