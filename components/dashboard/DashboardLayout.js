import React from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children, title }) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="relative w-full lg:w-4/5 h-full overflow-y-auto scrollbar">
        <Navbar />
        <div className="w-full mt-20 lg:mt-[90px] px-6">
          <h1 className="text-xl leading-9 lg:text-2xl font-Inter lg:leading-10 font-medium text-amcovad-tertiary-color/90 ">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

DashboardLayout.defaultProps = {
  title: null,
  children: null
};

export default DashboardLayout;
