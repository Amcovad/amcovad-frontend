import React from 'react';
import Image from 'next/image';

const StatCard = ({ amount, graph, monthStat, title, verified, unverified }) => {
  return (
    <div className="w-full lg:w-1/2 ">
      <div className="py-1 px-2 my-4 ">
        <div className=" rounded-[0.625rem] border border-amcovad-secondary-200">
          <div className="flex items-center justify-between p-6">
            <div className="items-start">
              <p className="font-Inter font-semibold text-[17px] text-amcovad-secondary-700 leading-7">{title}</p>
              <h1 className=" pt-5 pb-6 text-5xl font-Poppins font-medium leading-7 text-amcovad-tertiary">{amount}</h1>
              <div>
                <p className="font-Inter font-normal text-xs text-amcovad-secondary-500 leading-5">{verified}</p>
                <p className="font-Inter font-normal text-xs text-amcovad-secondary-500 leading-5">{unverified}</p>
              </div>
            </div>
            <div className="items-end">
              <Image src={graph} width={100} height={70} alt="graph " />
              <p className="font-Inter p-1 px-2 rounded bg-amcovad-primary-100 font-normal text-xs text-amcovad-secondary-500 leading-5">
                {monthStat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
