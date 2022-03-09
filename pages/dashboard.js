import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <main>
          <div className="container mt-20 mx-auto py-10 h-64  px-6">
            <div className="w-full h-full rounded border-dashed border-2 border-amcovad-secondary-300">
              <h1 className="text-4xl justify-center font-RozhaOne text-amcovad-secondary-700 text-center">
                Dashboard
              </h1>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
