import React from 'react';
import Image from 'next/image';
import { FooterLogo, Instagram, Facebook, Linkin, Twitter, Call, Mail, Location } from '../assets';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-amcovad-tertiary bg-cover bg-left lg:bg-top  bg-[url('../assets/images/footer-hexagons.png')]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full pb-24 lg:max-w-screen-xl md:px-24 ">
        <div className="container px-2 py-4 mx-auto">
          <div className="grid gap-4 lg:gap-20 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <Link passHref href="/">
                <span className="inline-flex items-center cursor-pointer">
                  <Image src={FooterLogo} alt="footer logo" />
                </span>
              </Link>
              <div className="mt-4 lg:max-w-sm">
                <div className="flex flex-col justify-between pt-1 pb-10 sm:flex-row">
                  <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <span className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer">
                      <Link href="https://instagram.com/" passHref>
                        <Image src={Instagram} alt="social icon logo" />
                      </Link>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer">
                      <Link href="https://facebook.com/" passHref>
                        <Image src={Facebook} alt="social icon logo" />
                      </Link>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer">
                      <Link href="https://linkin.com/#" passHref>
                        <Image src={Linkin} alt="social icon logo" />
                      </Link>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer">
                      <Link href="https://twitter.com/" passHref>
                        <Image src={Twitter} alt="social icon logo" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-5 lg:col-span-4 md:grid-cols-4">
              <div>
                <ul className="mt-2 space-y-2">
                  <li className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer ">
                    <Link passHref href="/services">
                      Services & Products
                    </Link>
                  </li>
                  <li className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mt-2 space-y-2">
                  <li className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <Link href="#">Careers</Link>
                  </li>
                  <li className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <Link href="#">Updates</Link>
                  </li>
                  <li className="text-amcovad-secondary-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <Link href="/blog">Blog</Link>
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
                        <Link href="tel:+23490400032453">+ 234 (0) 90400032453</Link>
                      </h6>
                    </div>
                  </li>

                  <li>
                    <div className="flex  lg:items-center lg:flex-row">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                        <Image src={Mail} alt="social icon logo" />
                      </div>
                      <h6 className="font-normal text-amcovad-secondary-300 leading-5 mt-2 lg:mt-0">
                        <Link href="mailto:contactus@amcovad.com">contactus@amcovad.com</Link>
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
