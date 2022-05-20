import React, { useState } from 'react';

import { RightCaret } from '@/public/assets/dashboard/navBarIcon';

const AccordionLayout = ({ options }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      {options.map(({ title, content }, index) => (
        <div
          key={title}
          className="overflow-hidden flex w-full flex-col my-3 border-2 rounded-md border-amcovad-secondary-300"
        >
          <div
            onClick={() => setIsActive(isActive === index ? null : index)}
            className="flex items-center p-4 justify-between  cursor-pointer bg-amcovad-secondary-100"
          >
            <div className="flex items-center gap-4 text-amcovad-secondary-600 font-bold">
              <span>{isActive === index ? <RightCaret className="rotate-90" /> : <RightCaret />}</span>
              <p className=" font-bold text-base text-amcovad-secondary-600"> {title}</p>
            </div>
          </div>
          {index === isActive && (
            <div className=" w-full leading-6 text-amcovad-secondary-600  transition-height ease duration-500 p-4 px-10 mb-6">
              {content}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default AccordionLayout;
