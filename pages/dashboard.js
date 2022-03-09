import React from 'react';
import SideBar from '../components/dashboard/SideBar';
import Navbar from '../components/dashboard/Navbar';

function Dashboard() {
  return (
    <>
      <div className="flex h-screen  ">
        <SideBar />
        <div className=" relative w-full lg:w-3/4 h-full overflow-y-auto scrollbar">
          <Navbar />
          <main>
            <div className="container mt-20 mx-auto py-10 h-64  px-6">
              <div className="w-full h-full rounded border-dashed border-2 border-amcovad-secondary-300">
                <h1 className="text-4xl justify-center font-RozhaOne text-amcovad-secondary-700 text-center">
                  Dashboard
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
