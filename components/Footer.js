import React from 'react';
import Image from 'next/image';
import { FooterLogo, Instagram, Facebook, Linkin, Twitter, Call, Mail, Location } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-amcovad-tertiary bg-cover bg-left lg:bg-top  bg-[url('../assets/images/footer-hexagons.png')]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full pb-24 lg:max-w-screen-xl md:px-24 ">
        <div className="container px-2 py-4 mx-auto">
          <div className="grid gap-4 lg:gap-20 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <a href="#" aria-label="Go home" title="Company" className="inline-flex items-center">
                <Image src={FooterLogo} alt="footer logo" />
              </a>
              <div className="mt-4 lg:max-w-sm">
                <div className="flex flex-col justify-between pt-1 pb-10 sm:flex-row">
                  <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Image src={Instagram} alt="social icon logo" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Image src={Facebook} alt="social icon logo" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Image src={Linkin} alt="social icon logo" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <Image src={Twitter} alt="social icon logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-5 lg:col-span-4 md:grid-cols-4">
              <div>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Services & Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:max-w-md lg:col-span-2">
                <ul className="mt-2 space-y-2">
                  <li>
                    <div className="flex  lg:items-center lg:flex-row">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                        <Image src={Call} alt="social icon logo" />
                      </div>
                      <h6 className="font-normal text-amcovad-secondary-300 leading-5 mt-2 lg:mt-0">
                        + 234 (0) 90400032453
                      </h6>
                    </div>
                  </li>

                  <li>
                    <div className="flex  lg:items-center lg:flex-row">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                        <Image src={Mail} alt="social icon logo" />
                      </div>
                      <h6 className="font-normal text-amcovad-secondary-300 leading-5 mt-2 lg:mt-0">
                        contactus@amcovad.com
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="flex  lg:items-center lg:flex-row">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                        <Image src={Location} alt="social icon logo" />
                      </div>
                      <h6 className="font-normal text-amcovad-secondary-300 leading-5 mt-2 lg:mt-0">
                        3rd Floor, Central District Area, Abuja.
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
