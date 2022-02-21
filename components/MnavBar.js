import React, { useState } from 'react';

import Image from 'next/image';
import Logo from '../public/logo.svg';
import Link from 'next/link';

const style = {
  container: `relative top-1/4 w-full text-left pl-16 mt-8`,
  item: `text-3xl text-amcovad-white cursor-pointer  hover:amcovad-secondary-100`,
  menu: {
    isMenuOpen: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-amcovad-primary-500`
  }
};

const Menu = ({ children, isMenuOpen }) => {
  return (
    <div
      className={`${style.menu.default} 
       ${isMenuOpen ? style.menu.isMenuOpen : style.menu.close}`}
    >
      {children}
    </div>
  );
};

const MenuContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

const MenuItem = ({ href, children }) => {
  return (
    <div className="p-2">
      <Link href={href} passHref>
        <span className={style.item}>{children}</span>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className=" z-10 outline-[5px] lg:hidden w-screen">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="lg:px-20 relative flex items-center justify-between mt-5 ">
          <Link href="/" passHref>
            <div className="inline-flex items-center cursor-pointer">
              <Image src={Logo} width="160" height="36" alt="logo" />
            </div>
          </Link>

          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 bg-amcovad-secondary-200 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={toggle}
            >
              <svg className="w-5 text-amcovad-black" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
              </svg>
            </button>
            {setIsMenuOpen && (
              <Menu isMenuOpen={isMenuOpen}>
                <button
                  aria-label="Close"
                  className="absolute top-3 right-5 text-5xl text-amcovad-white cursor-pointer "
                  onClick={toggle}
                >
                  &times;
                </button>
                <MenuContainer>
                  <MenuItem href="/about">About </MenuItem>
                  <MenuItem href="/products">Product</MenuItem>
                  <MenuItem href="/pricing">Pricing</MenuItem>
                  <MenuItem href="/contact">Contact</MenuItem>
                  <MenuItem href="/sign-up">Sign Up</MenuItem>
                </MenuContainer>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
