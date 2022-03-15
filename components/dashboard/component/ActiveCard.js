import React from 'react';
import classNames from 'classnames';
const ActiveCard = ({ backgroundColor, icon, title, total }) => {
  return (
    <div className="w-full lg:w-4/12 transition duration-500 hover:scale-105 ">
      <div className="p-2">
        <div className="rounded-[0.625rem]" style={{ backgroundColor: `${backgroundColor}` }}>
          <div className="px-4 pt-4 ">{icon}</div>
          <div className="px-4 py-2">
            <p className="font-Inter font-medium text-base leading-7">{title}</p>
            <p className=" pt-2 pb-1 text-4xl font-Poppins font-normal leading-7 text-amcovad-tertiary">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
