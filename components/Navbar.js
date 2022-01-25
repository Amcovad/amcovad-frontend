import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Button from '../components/form/Button';

const Navbar = () => {
  return (
    <header className="fixed z-10 border outline-[5px] border-[#67D1FB]">
      <nav className=" w-screen flex items-center bg-[#F5F6F8]  h-[4rem] p-8">
        <div className="ml-16">
          <Image src={Logo} width="167" height="42" alt="logo" />
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
