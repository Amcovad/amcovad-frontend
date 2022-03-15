import React from 'react';

const PublishCard = ({ date, firstIcon, text, title, secondIcon }) => {
  return (
    <>
      {title && <p className="py-2 font-Poppins text-amcovad-secondary-500 text-sm">{title}</p>}
      <div className="flex items-start mb-2 rounded justify-between border border-amcovad-secondary-300 py-2 px-2 bg-amcovad-secondary-100 hover:bg-amcovad-secondary-200">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col w-full ml-2 items-start justify-between font-Inter ">
            <p className="text-amcovad-secondary-700 pb-1 flex-wrap max-w-lg">{text}</p>
            <p className="text-amcovad-secondary-500 text-[10px]">{date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-1">
          <span className="pr-4">{firstIcon}</span>
          {secondIcon}
        </div>
      </div>
    </>
  );
};

export default PublishCard;
