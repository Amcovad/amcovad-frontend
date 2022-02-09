import React, { useState } from 'react';

import Image from 'next/image';
import Logo from '../public/logo.svg';
import Button from '../components/form/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-10 outline-[5px] border-b  border-amcovad-primary-200 w-screen">
      <div className="px-4 bg-amcovad-secondary-100 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="lg:px-20 relative flex items-center justify-between">
          <a href="#" aria-label="Company" title="Company" className="inline-flex items-center">
            <Image src={Logo} width="167" height="42" alt="logo" />
          </a>
          <ul className="flex items-center hidden lg:flex">
            <li>
              <Button outline>Sign in</Button>
            </li>
            <li>
              <Button className="text-white ml-4">Try it now</Button>
            </li>
          </ul>
          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 bg-amcovad-secondary-200 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-amcovad-black" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-amcovad-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a href="#" aria-label="Company" title="Company" className="inline-flex items-center">
                        <Image src={Logo} width="167" height="42" alt="logo" />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 bg-amcovad-secondary-200 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-amcovad-black" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-amcovad-secondary-600 transition-colors duration-200"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-amcovad-secondary-600 transition-colors duration-200"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-amcovad-secondary-600 transition-colors duration-200"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-amcovad-secondary-600 transition-colors duration-200"
                        >
                          About us
                        </a>
                      </li>

                      <li>
                        <a href="#" className="" aria-label="Sign in" title="Sign in">
                          <Button>Sign in</Button>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
