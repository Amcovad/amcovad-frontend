import React from 'react';
import Image from 'next/image';
import { CaretIcon, SignOutIcon, UserIcon } from '@/public/assets/dashboard/navBarIcon';
import User from '@/public/assets/dashboard/alliyy-adams.svg';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from 'app/reducers/authSlice';

export const ManageSetting = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="absolute right-0 w-40 px-1 pt-2 mt-12 rounded shadow bg-amcovad-secondary-200 lg:left-0 sm:mt-16">
        <li className="flex items-center justify-between p-2 cursor-pointer text-amcovad-secondary-700 hover:text-amcovad-primary-500">
          <div className="flex items-center">
            <UserIcon width={18} height={18} />
            <span className="ml-2 text-sm">My Profile</span>
          </div>
        </li>
        <li
          onClick={() => dispatch(signout())}
          className="flex items-center justify-between px-2 pb-4 mt-3 cursor-pointer text-amcovad-secondary-700 hover:text-amcovad-primary-500"
        >
          <div className="flex items-center">
            <SignOutIcon width={18} height={19} />
            <span className="ml-2 text-sm">Sign out</span>
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
      <div className="relative flex items-center cursor-pointer" onClick={() => setProfile(!profile)}>
        <div className="rounded-full">
          {profile && <ManageSetting />}
          <div className="relative w-10 h-10">
            <Image src={User} alt="profile image" />
          </div>
        </div>
        <p className="hidden mx-3 text-base font-normal lg:block text-amcovad-secondary-700 font-Poppins">
          {currentUser?.name} ({currentUser?.email})
        </p>
        <div className="pl-2 cursor-pointer lg:pl-0 text-amcovad-secondary-500">
          <CaretIcon width={15} height={7} />
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
