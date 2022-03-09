import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sidebarData from '../../data/dashboard/sidebar';
import NavLink from './NavLink';
import Logo from '../../public/logo.svg';
import Settings from '../../public/assets/dashboard/Setting.svg';
import User from '../../public/assets/dashboard/alliyy-adams.svg';
import {
  CaretIcon,
  ChatIcon,
  HamburgerIcon,
  NotificationIcon,
  SearchIcon,
  SignOutIcon,
  UserIcon,
  XIcon
} from '../../public/assets/dashboard/navBarIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="fixed z-10 w-full lg:w-3/4">
        <nav className="bg-amcovad-secondary-200 ">
          <div className="container px-6 pb-2 md:py-2 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <div className="flex pt-3 md:pt-1 items-center cursor-pointer lg:hidden ">
                  <span className="" onClick={() => setIsMenuOpen(true)}>
                    <HamburgerIcon />
                  </span>
                  <span className=" ml-6 md:pl-10">
                    <SearchIcon />
                  </span>
                </div>
                <div className="relative w-[300px] lg:block hidden  ">
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer ">
                    <SearchIcon />
                  </div>
                  <input
                    className="border font-Poppins text-sm font-normal  text-amcovad-secondary-500 border-amcovad-secondary-300 bg-amcovad-secondary-100 focus:outline-none focus:border-amcovad-primary-300 rounded w-full   pl-4 py-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center ">
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="w-full flex items-center pl-3 justify-end">
                    <div className="h-full w-10 md:w-11 flex items-center justify-center ">
                      <div className="relative cursor-pointer">
                        <NotificationIcon width={24} height={24} />
                      </div>
                    </div>
                    <div className="h-full w-10 md:w-11 flex items-center justify-center  mr-4 cursor-pointer text-amcovad-secondary-700">
                      <ChatIcon />
                    </div>
                    <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                      <div className="rounded-full">
                        {profile ? (
                          <div className="">
                            <ul className="pt-2 w-40  px-1  bg-amcovad-secondary-200 absolute rounded right-0 lg:left-0 shadow mt-12 sm:mt-16 ">
                              <li className="flex justify-between text-amcovad-secondary-700 p-2 hover:text-amcovad-primary-500 cursor-pointer items-center">
                                <div className="flex items-center">
                                  <UserIcon width={18} height={18} />
                                  <span className="text-sm ml-2">My Profile</span>
                                </div>
                              </li>
                              <li className="flex justify-between pb-4 px-2 text-amcovad-secondary-700 hover:text-amcovad-primary-500 cursor-pointer items-center mt-3">
                                <div className="flex items-center">
                                  <SignOutIcon width={18} height={19} />
                                  <span className="text-sm ml-2">Sign out</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          ''
                        )}
                        <div className="relative w-10 h-10">
                          <Image src={User} alt="profile image" />
                        </div>
                      </div>
                      <p className="lg:block hidden text-amcovad-secondary-700 font-Poppins text-base font-normal mx-3">
                        Aliyy Adams
                      </p>
                      <div className="cursor-pointer pl-2 lg:pl-0 text-amcovad-secondary-500">
                        <CaretIcon width={15} height={7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/*Mobile responsive sidebar*/}
      {setIsMenuOpen && (
        <div
          className={
            isMenuOpen
              ? 'w-full h-full fixed top-0 z-40  transform  translate-x-0  '
              : '   w-full h-full absolute z-40  transform -translate-x-full'
          }
          id="mobile-nav"
        >
          <div
            className=" bg-amcovad-secondary-100 opacity-80 fixed z-20 h-screen overflow-y-auto scrollbar w-full lg:hidden"
            onClick={() => setIsMenuOpen()}
          />
          <div className="fixed z-40 sm:relative w-64 md:w-96 shadow pb-4 overflow-y-auto  lg:hidden transition duration-150 ease-in-out h-full">
            <div className="flex flex-col justify-between h-full w-full">
              <div className="bg-amcovad-secondary-100">
                <div className="flex items-center justify-between px-3  bg-amcovad-secondary-100 z-50 top-0 sticky">
                  <div className="h-16 w-full flex items-center pt-1">
                    <Link href="/" passHref>
                      <a>
                        <Image src={Logo} width="155" height="35" alt="logo" />
                      </a>
                    </Link>
                  </div>
                  <div
                    id="closeSideBar"
                    className="flex items-center justify-center h-10 w-10"
                    onClick={() => setIsMenuOpen()}
                  >
                    <XIcon width="16px" height="16px" />
                  </div>
                </div>
                <ul className=" pt-6 ">
                  {sidebarData.map((data, index) => {
                    return <NavLink key={index} name={data.name} url={data.url} icon={data.icon} />;
                  })}
                </ul>
              </div>
              <div className="w-full">
                <div className="w-full flex items-center justify-between ">
                  <div className="  px-6 py-2 w-full bg-amcovad-secondary-300 ">
                    <Link href="/settings" passHref>
                      <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-amcovad-secondary-700 focus:text-amcovad-secondary-700 transition-colors duration-150 hover:text-amcovad-primary-400 ">
                        <Image src={Settings} width="22" height="20" className="object-cover " alt="icon" />
                        <span className="ml-4">Settings</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
