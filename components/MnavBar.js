import React, { useState } from 'react';

import Image from 'next/image';
import Logo from '../public/logo.svg';
import Link from 'next/link';
import { WhiteLogo, HamburgerMenu } from '../assets';
import NavLink from './NavLink';
import navBarLink from '../data/menu';

const style = {
  container: `relative top-1/4 w-full text-left pl-16 md:pl-32 mt-8`,
  item: `text-3xl text-amcovad-white cursor-pointer  hover:amcovad-secondary-100`,
  logo: `absolute top-8 left-8 md:left-20`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-amcovad-primary-500`
  }
};

const Menu = ({ children, isMenuOpen }) => {
  return <div className={`${style.menu.default} ${isMenuOpen ? style.menu.open : style.menu.close}`}>{children}</div>;
};

const MenuContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

const MenuItem = ({ title, url }) => {
  return (
    <div className="p-2">
      <Link href={url} passHref>
        <span className={style.item}>{title}</span>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className="p-2  -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <Image src={HamburgerMenu} alt="hamburger icon" />
            </button>
            {setIsMenuOpen && (
              <Menu isMenuOpen={isMenuOpen}>
                <>
                  <div className="relative">
                    <div className={style.logo}>
                      <Image src={WhiteLogo} alt="icon logo" />
                    </div>
                  </div>
                  <button
                    aria-label="Close"
                    className="absolute top-3 right-5 text-5xl text-amcovad-white cursor-pointer "
                    onClick={() => setIsMenuOpen()}
                  >
                    &times;
                  </button>
                  <MenuContainer>
                    {navBarLink.map((data, index) => {
                      return <MenuItem key={index} title={data.title} url={data.url} />;
                    })}
                    <MenuItem url="/sign-up" title="Sign Up" />
                  </MenuContainer>
                </>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
