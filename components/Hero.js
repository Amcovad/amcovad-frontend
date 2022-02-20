import React from 'react';
import Image from 'next/image';
import { Lock, Phone, User } from '../assets';
import Button from '../components/form/Button';
import Footer from './Footer';
import Blog from './Blog';

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <section className=" bg-cover py-2 md:py-10 lg:pb-28  bg-top bg-opacity-20 bg-[url('../assets/images/hexagons.png')] md:px-0">
        <div className="px-4 py-12 mt-24 lg:mt-0 xl:py-28  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6 px-4 md:px-0">
                <div className="w-full pb-6 space-y-6 sm:max-w-md md:max-w-full  lg:max-w-lg xl:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 lg:pl-8 xl:pl-0">
                  <h1 className="text-4xl font-RozhaOne  font-extrabold tracking-tight text-amcovad-primary-500  md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block ">Digital approach to </span>
                    <span className="block ">a secure deal & transactions</span>
                  </h1>
                  <p className="text-amcovad-tertiary font-Inter text-[0.75rem] sm:font-[500] font-normal mx-auto sm:max-w-md lg:text-xl md:max-w-3xl">
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

                <p className="text-amcovad-secondary-700 z-10 pl-16 pb-6 font-Inter text-[0.875rem] font-[700] mx-auto sm:max-w-md lg:text-sm md:max-w-3xl">
                  Setup your account
                </p>
                <p className="max-w-[20.25rem] md:max-w-[27rem] lg:max-w-[23.6875rem] z-10   text-amcovad-secondary-600 font-Inter font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum et accumsan nulla posuere aliquet
                  ac eleifend erat viverra. Nisi maecenas laoreet aenean suscipit. Blandit at vulputate non nunc, mollis
                  amet
                </p>

                <span className="font-['Inter'] block text-[15.5rem] md:text-[12.5rem] lg:text-[16rem] left-[-1.3125rem] md:left-[-0.625rem] lg:left-[-1.625rem] top-[3.4rem] md:top-[2rem] lg:top-20 xl:top-[7.6rem] absolute font-normal text-amcovad-black opacity-10">
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

      <section className="py-20 bg-amcovad-primary-600">
        <div className="container items-center px-4 xl:px-8  mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-3/5 ">
              <div className="w-full relative lg:max-w-md">
                <div className=" lg:max-w-[336px]">
                  <h2 className="mb-4 text-3xl max-w-[14rem] md:max-w-[17.25rem] font-RozhaOne text-white font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                    Real Story from real Amcovad.
                  </h2>
                  <p className="mb-4 font-Inter font-normal tracking-tight text-amcovad-secondary-100 xl:mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum et accumsan nulla
                  </p>
                </div>

                <div className=" bg-amcovad-secondary-100 lg:ml-12 dark:bg-gray-800 w-full rounded-md px-10 py-8 mb-6 shadow sm:inline-block">
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <a href="#" className="block relative">
                          <Image alt="profil" src={User} className="mx-auto object-cover  h-16 w-16 " />
                        </a>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-amcovad-secondary-300 dark:text-gray-200 font-bold">Al-Amanah Click</span>
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-500 dark:text-gray-300  pr-1 text-sm">4.5</span>
                        <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.56581 11.7797C9.27873 11.7797 8.9104 11.6876 8.44998 11.4168L6.8304 10.458C6.66248 10.3605 6.33748 10.3605 6.17498 10.458L4.54998 11.4168C3.59123 11.9855 3.0279 11.758 2.77332 11.5738C2.52415 11.3897 2.13415 10.9184 2.38873 9.83509L2.77332 8.17217C2.81665 7.99884 2.72998 7.70092 2.59998 7.57092L1.25665 6.22759C0.584982 5.55592 0.639149 4.98175 0.731232 4.70009C0.823316 4.41842 1.11582 3.92009 2.04748 3.763L3.7754 3.47592C3.9379 3.44884 4.17082 3.2755 4.24123 3.12925L5.19998 1.21717C5.63332 0.345088 6.20207 0.215088 6.49998 0.215088C6.7979 0.215088 7.36665 0.345088 7.79998 1.21717L8.75331 3.12384C8.82915 3.27009 9.06207 3.44342 9.22457 3.4705L10.9525 3.75759C11.8896 3.91467 12.1821 4.413 12.2687 4.69467C12.3554 4.97634 12.4096 5.5505 11.7433 6.22217L10.4 7.57092C10.27 7.70092 10.1887 7.99342 10.2266 8.17217L10.6112 9.83509C10.8604 10.9184 10.4758 11.3897 10.2266 11.5738C10.0912 11.6713 9.87457 11.7797 9.56581 11.7797ZM6.49998 9.56967C6.7654 9.56967 7.03082 9.63467 7.24207 9.75925L8.86165 10.718C9.3329 10.9997 9.63082 10.9997 9.74457 10.9184C9.85832 10.8372 9.93956 10.5501 9.8204 10.0193L9.43582 8.35634C9.3329 7.90675 9.50082 7.32717 9.82582 6.99675L11.1691 5.65342C11.4346 5.388 11.5537 5.128 11.4996 4.94925C11.44 4.7705 11.1908 4.62425 10.8225 4.56467L9.09457 4.27759C8.67748 4.20717 8.22248 3.87134 8.0329 3.49217L7.07957 1.5855C6.90623 1.23884 6.68957 1.033 6.49998 1.033C6.3104 1.033 6.09373 1.23884 5.92582 1.5855L4.96707 3.49217C4.77748 3.87134 4.32248 4.20717 3.9054 4.27759L2.1829 4.56467C1.81457 4.62425 1.5654 4.7705 1.50582 4.94925C1.44623 5.128 1.57082 5.39342 1.83623 5.65342L3.17957 6.99675C3.50457 7.32175 3.67248 7.90675 3.56957 8.35634L3.18498 10.0193C3.0604 10.5555 3.14707 10.8372 3.26082 10.9184C3.37457 10.9997 3.66707 10.9943 4.14373 10.718L5.76332 9.75925C5.96915 9.63467 6.23457 9.56967 6.49998 9.56967Z"
                            fill="#01B3F8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mt-1 max-w-[420px] dark:text-white text-[0.875rem] text-amcovad-secondary-600 font-Inter font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus facilisi ac vivamus quisque nunc
                      tincidunt donec faucibus. Tempor adipiscing amet ultrices eget nam risus donec. Id velit viverra
                      quis faucibus volutpat maecenas auctor. Cursus venenatis sed egestas ut in.
                    </p>
                    <p className="mt-1 max-w-[420px] dark:text-white text-[0.875rem] text-amcovad-secondary-600 font-Inter font-normal">
                      Nulla pellentesque imperdiet scelerisque sed. Elementum quis id suspendisse felis, sollicitudin
                      nisl. Suspendisse id fermentum varius cursus
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block w-full px-2 mb-12 lg:w-2/5 order-0 lg:order-1 lg:mb-0">
              <div className="bg-amcovad-secondary-100 dark:bg-gray-800 w-full rounded-md px-10 py-8 mb-6 shadow sm:inline-block">
                <div className="flex items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <a href="#" className="block relative">
                        <Image alt="profil" src={User} className="mx-auto object-cover  h-16 w-16 " />
                      </a>
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="flex items-baseline">
                      <span className="text-amcovad-secondary-300 dark:text-gray-200 font-bold">Al-Amanah Click</span>
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-500 dark:text-gray-300  pr-1 text-sm">4.5</span>
                      <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.56581 11.7797C9.27873 11.7797 8.9104 11.6876 8.44998 11.4168L6.8304 10.458C6.66248 10.3605 6.33748 10.3605 6.17498 10.458L4.54998 11.4168C3.59123 11.9855 3.0279 11.758 2.77332 11.5738C2.52415 11.3897 2.13415 10.9184 2.38873 9.83509L2.77332 8.17217C2.81665 7.99884 2.72998 7.70092 2.59998 7.57092L1.25665 6.22759C0.584982 5.55592 0.639149 4.98175 0.731232 4.70009C0.823316 4.41842 1.11582 3.92009 2.04748 3.763L3.7754 3.47592C3.9379 3.44884 4.17082 3.2755 4.24123 3.12925L5.19998 1.21717C5.63332 0.345088 6.20207 0.215088 6.49998 0.215088C6.7979 0.215088 7.36665 0.345088 7.79998 1.21717L8.75331 3.12384C8.82915 3.27009 9.06207 3.44342 9.22457 3.4705L10.9525 3.75759C11.8896 3.91467 12.1821 4.413 12.2687 4.69467C12.3554 4.97634 12.4096 5.5505 11.7433 6.22217L10.4 7.57092C10.27 7.70092 10.1887 7.99342 10.2266 8.17217L10.6112 9.83509C10.8604 10.9184 10.4758 11.3897 10.2266 11.5738C10.0912 11.6713 9.87457 11.7797 9.56581 11.7797ZM6.49998 9.56967C6.7654 9.56967 7.03082 9.63467 7.24207 9.75925L8.86165 10.718C9.3329 10.9997 9.63082 10.9997 9.74457 10.9184C9.85832 10.8372 9.93956 10.5501 9.8204 10.0193L9.43582 8.35634C9.3329 7.90675 9.50082 7.32717 9.82582 6.99675L11.1691 5.65342C11.4346 5.388 11.5537 5.128 11.4996 4.94925C11.44 4.7705 11.1908 4.62425 10.8225 4.56467L9.09457 4.27759C8.67748 4.20717 8.22248 3.87134 8.0329 3.49217L7.07957 1.5855C6.90623 1.23884 6.68957 1.033 6.49998 1.033C6.3104 1.033 6.09373 1.23884 5.92582 1.5855L4.96707 3.49217C4.77748 3.87134 4.32248 4.20717 3.9054 4.27759L2.1829 4.56467C1.81457 4.62425 1.5654 4.7705 1.50582 4.94925C1.44623 5.128 1.57082 5.39342 1.83623 5.65342L3.17957 6.99675C3.50457 7.32175 3.67248 7.90675 3.56957 8.35634L3.18498 10.0193C3.0604 10.5555 3.14707 10.8372 3.26082 10.9184C3.37457 10.9997 3.66707 10.9943 4.14373 10.718L5.76332 9.75925C5.96915 9.63467 6.23457 9.56967 6.49998 9.56967Z"
                          fill="#01B3F8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="mt-1 max-w-[420px] dark:text-white text-[0.875rem] text-amcovad-secondary-600 font-Inter font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus facilisi ac vivamus quisque nunc
                    tincidunt donec faucibus. Tempor adipiscing amet ultrices eget nam risus donec. Id velit viverra
                    quis faucibus volutpat maecenas auctor. Cursus venenatis sed egestas ut in.
                  </p>
                  <p className="mt-1 max-w-[420px] dark:text-white text-[0.875rem] text-amcovad-secondary-600 font-Inter font-normal">
                    Nulla pellentesque imperdiet scelerisque sed. Elementum quis id suspendisse felis, sollicitudin
                    nisl. Suspendisse id fermentum varius cursus
                  </p>
                </div>
              </div>
              <div className="bg-amcovad-secondary-100 dark:bg-gray-800 w-full rounded-md px-10 py-8 mb-6 shadow sm:inline-block">
                <div className="flex items-start text-left">
                  <div className="flex-shrink-0">
                    <div className="inline-block relative">
                      <a href="#" className="block relative">
                        <Image alt="profil" src={User} className="mx-auto object-cover  h-16 w-16 " />
                      </a>
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="flex items-baseline">
                      <span className="text-amcovad-secondary-300 dark:text-gray-200 font-bold">Al-Amanah Click</span>
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-500 dark:text-gray-300  pr-1 text-sm">4.5</span>
                      <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.56581 11.7797C9.27873 11.7797 8.9104 11.6876 8.44998 11.4168L6.8304 10.458C6.66248 10.3605 6.33748 10.3605 6.17498 10.458L4.54998 11.4168C3.59123 11.9855 3.0279 11.758 2.77332 11.5738C2.52415 11.3897 2.13415 10.9184 2.38873 9.83509L2.77332 8.17217C2.81665 7.99884 2.72998 7.70092 2.59998 7.57092L1.25665 6.22759C0.584982 5.55592 0.639149 4.98175 0.731232 4.70009C0.823316 4.41842 1.11582 3.92009 2.04748 3.763L3.7754 3.47592C3.9379 3.44884 4.17082 3.2755 4.24123 3.12925L5.19998 1.21717C5.63332 0.345088 6.20207 0.215088 6.49998 0.215088C6.7979 0.215088 7.36665 0.345088 7.79998 1.21717L8.75331 3.12384C8.82915 3.27009 9.06207 3.44342 9.22457 3.4705L10.9525 3.75759C11.8896 3.91467 12.1821 4.413 12.2687 4.69467C12.3554 4.97634 12.4096 5.5505 11.7433 6.22217L10.4 7.57092C10.27 7.70092 10.1887 7.99342 10.2266 8.17217L10.6112 9.83509C10.8604 10.9184 10.4758 11.3897 10.2266 11.5738C10.0912 11.6713 9.87457 11.7797 9.56581 11.7797ZM6.49998 9.56967C6.7654 9.56967 7.03082 9.63467 7.24207 9.75925L8.86165 10.718C9.3329 10.9997 9.63082 10.9997 9.74457 10.9184C9.85832 10.8372 9.93956 10.5501 9.8204 10.0193L9.43582 8.35634C9.3329 7.90675 9.50082 7.32717 9.82582 6.99675L11.1691 5.65342C11.4346 5.388 11.5537 5.128 11.4996 4.94925C11.44 4.7705 11.1908 4.62425 10.8225 4.56467L9.09457 4.27759C8.67748 4.20717 8.22248 3.87134 8.0329 3.49217L7.07957 1.5855C6.90623 1.23884 6.68957 1.033 6.49998 1.033C6.3104 1.033 6.09373 1.23884 5.92582 1.5855L4.96707 3.49217C4.77748 3.87134 4.32248 4.20717 3.9054 4.27759L2.1829 4.56467C1.81457 4.62425 1.5654 4.7705 1.50582 4.94925C1.44623 5.128 1.57082 5.39342 1.83623 5.65342L3.17957 6.99675C3.50457 7.32175 3.67248 7.90675 3.56957 8.35634L3.18498 10.0193C3.0604 10.5555 3.14707 10.8372 3.26082 10.9184C3.37457 10.9997 3.66707 10.9943 4.14373 10.718L5.76332 9.75925C5.96915 9.63467 6.23457 9.56967 6.49998 9.56967Z"
                          fill="#01B3F8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="mt-1 max-w-[420px] dark:text-white text-[0.875rem] text-amcovad-secondary-600 font-Inter font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus facilisi ac vivamus quisque nunc
                    tincidunt donec faucibus. Tempor adipiscing amet ultrices eget nam risus donec. Id velit viverra
                    quis faucibus volutpat maecenas auctor. Cursus venenatis sed egestas ut in.
                  </p>
                  <p className="mt-1 max-w-[420px] dark:text-white text-[0.875rem] text-amcovad-secondary-600 font-Inter font-normal">
                    Nulla pellentesque imperdiet scelerisque sed. Elementum quis id suspendisse felis, sollicitudin
                    nisl. Suspendisse id fermentum varius cursus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
};

export default Hero;
