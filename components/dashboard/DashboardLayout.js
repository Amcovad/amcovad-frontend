import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen  ">
      <SideBar />
      <div className=" relative w-full lg:w-3/4 h-full overflow-y-auto scrollbar">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
