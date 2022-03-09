import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ containerClassName, icon, name, url }) => {
  const { asPath } = useRouter();
  return (
    <li
      className={`relative px-6 pb-2 pt-3 my-3  ${
        url === asPath ? 'bg-amcovad-secondary-200 border-r-4 border-amcovad-primary-400 ' : ''
      } ${containerClassName}`}
    >
      <Link href={url} passHref>
        <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-amcovad-secondary-700 focus:text-amcovad-secondary-700 transition-colors duration-150 hover:text-amcovad-primary-400 ">
          <Image src={icon} width="22" height="20" className="object-cover " alt="icon" />
          <span className="ml-4">{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
