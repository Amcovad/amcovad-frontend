import React from 'react';
import Image from 'next/image';
import { CaretIcon, SignOutIcon, UserIcon } from '@/public/assets/dashboard/navBarIcon';
import User from '@/public/assets/dashboard/alliyy-adams.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'app/reducers/authSlice';

export const ManageSetting = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="pt-2 w-40 px-1 bg-amcovad-secondary-200 absolute rounded right-0 lg:left-0 shadow mt-12 sm:mt-16">
        <li className="flex justify-between text-amcovad-secondary-700 p-2 hover:text-amcovad-primary-500 cursor-pointer items-center">
          <div className="flex items-center">
            <UserIcon width={18} height={18} />
            <Link href="/settings/profile" passHref>
              <a>
                <span className="text-sm ml-2">My Profile</span>
              </a>
            </Link>
          </div>
        </li>
        <li
          onClick={() => dispatch(logout())}
          className="flex justify-between pb-4 px-2 text-amcovad-secondary-700 hover:text-amcovad-primary-500 cursor-pointer items-center mt-3"
        >
          <div className="flex items-center">
            <SignOutIcon width={18} height={19} />
            <span className="text-sm ml-2">Sign Out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

const ManageProfile = () => {
  const [profile, setProfile] = React.useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
        <div className="rounded-full">
          {profile && <ManageSetting />}
          <div className="relative w-10 h-10">
            <Image src={User} alt="profile image" />
          </div>
        </div>
        <p className="lg:block hidden text-amcovad-secondary-700 font-Poppins text-base font-normal mx-3">
          {currentUser?.name}
        </p>
        <div className="cursor-pointer pl-2 lg:pl-0 text-amcovad-secondary-500">
          <CaretIcon width={15} height={7} />
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
