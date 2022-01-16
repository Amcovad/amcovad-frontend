import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Button from '../components/form/Button';

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center bg-[#F5F6F8]  h-[4.8125rem] p-8">
        <div className="ml-16">
          <Image src={Logo} alt="logo" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-1 mr-20">
          <Button outline>Sign in</Button>
          <Button>Try it now</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
