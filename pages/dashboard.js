import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { coloredData, graphData, listData, transactData } from '@/data/dashboard/index';
import { ColoredCard, GraphCard, ListCard } from '@/components/dashboard/component/index';
import { useRouter } from 'next/router';
import { Button } from '../components';
import { useSelector } from 'react-redux';

function Dashboard() {
  const router = useRouter();
  const { authenticated } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!authenticated) {
      router.push('/sign-in');
    }
  }, [authenticated, router]);

  return (
    <>
      <DashboardLayout title="Dashboard">
        <main className="w-full h-screen px-2 pt-4 pb-36 lg:px-4 lg:pt-2">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[65%] mb-16 ">
              <div className="flex flex-wrap">
                {coloredData.map(({ backgroundColor, icon, title, total }, index) => {
                  return (
                    <ColoredCard
                      key={index}
                      backgroundColor={backgroundColor}
                      title={title}
                      icon={icon}
                      total={total}
                    />
                  );
                })}
              </div>

              <div className="flex flex-wrap">
                {graphData.map(({ amount, graph, monthStat, title, verified, unverified }, index) => {
                  return (
                    <GraphCard
                      key={index}
                      amount={amount}
                      graph={graph}
                      monthStat={monthStat}
                      title={title}
                      verified={verified}
                      unverified={unverified}
                    />
                  );
                })}
              </div>
              <div className="lg:p-2">
                <div className="relative w-full py-6 mt-2 overflow-hidden border rounded-lg border-amcovad-secondary-200">
                  <div className="px-3">
                    <div className="flex items-center justify-between w-full mb-4">
                      <p className="text-lg font-medium text-amcovad-secondary-700 font-Poppins">Published Templates</p>
                      <p className="flex items-center px-2 py-1 text-sm font-light border border-amcovad-secondary-200 hover:text-amcovad-secondary-700 text-amcovad-secondary-500 ">
                        Today, 13 Sep 2021
                      </p>
                    </div>
                    <div className="overflow-y-auto scrollbar max-h-60 ">
                      {listData.map(({ date, pinned, text }, index) => {
                        return <ListCard key={`listData-${index}`} date={date} pinned={pinned} text={text} />;
                      })}
                    </div>
                  </div>
                  <div className="w-full p-2.5 bg-amcovad-white border rounded-b-lg border-amcovad-secondary-200 absolute bottom-0 z-30">
                    <p className="text-center text-amcovad-primary-400 font-Inter text-[15px]">See All Announcement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[35%] ">
              <div className="m-2 ">
                <div className="flex px-4 py-3 text-lg font-medium text-white rounded-t-lg bg-amcovad-tertiary">
                  <p>Recently Activity</p>
                </div>
                <div>
                  <div className="flex w-full p-2 rounded-b-lg 2xl:items-start bg-amcovad-secondary-700">
                    <div className="w-full px-2 py-4 text-white font-Poppins">
                      <div className="w-full mb-4 ">
                        <p className="text-[0.625rem] text-amcovad-secondary-400 font-Inter font-medium">
                          10.40 AM, Fri 10 Sept 2022
                        </p>
                        <h1 className="font-medium font-Poppins text-lg my-1.5">Explore Modern Transaction. </h1>
                        <p className="my-2 text-sm text-amcovad-secondary-400">
                          Kindly check the requirements and terms of work and make sure everything is right.
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-normal ">Today you makes 12 Activity</p>
                        <Button className="px-2.5 py-1.5 text-sm font-medium lg:text-xs xl:text-sm capitalize">
                          See All Activity
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full py-6 mt-2 overflow-hidden border rounded-lg border-amcovad-secondary-200">
                  <div className="px-3">
                    <div className="flex items-center justify-between w-full mb-4">
                      <p className="text-lg font-medium text-amcovad-secondary-700 font-Poppins">
                        Existing Transactions
                      </p>
                      <p className="flex items-center px-2 py-1 text-sm font-light border border-amcovad-secondary-200 hover:text-amcovad-secondary-700 text-amcovad-secondary-500 ">
                        Today, 13 Sep 2021
                      </p>
                    </div>
                    <div className="scrollbar max-h-[23.5rem] overflow-y-auto ">
                      {transactData.map(({ date, text, title }, index) => {
                        return <ListCard key={`transactData-${index}`} title={title} date={date} text={text} />;
                      })}
                    </div>
                  </div>
                  <div className="w-full p-2.5 bg-amcovad-white border rounded-b-lg border-amcovad-secondary-200 absolute bottom-0 z-30">
                    <p className="text-center text-amcovad-primary-400 font-Inter text-[15px]">
                      Creat a New Transaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
