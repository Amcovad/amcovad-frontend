import React, { useState } from 'react';
import Image from 'next/image';
import faqImg from '../public/assets/faqs/faq-image.png';
import { Footer, Navbar } from '@/components/index';
import faqData from '@/data/faqs/faqsData';
import AccordionLayout from '@/components/Accordion/Accordion';

const Faqs = () => {
  const [visibleTab, setVisibleTab] = useState(faqData[0].id);

  const style = {
    tabActive: `text-black border-b-[4px] border-amcovad-primary-400 text-amcovad-primary-400 `,
    tabContent: ` py-1 m-0 `,
    tabTitle: ` inline-block text-sm font-Inter font-medium p-4 lg:p-3 text-amcovad-black cursor-pointer `
  };
  const tabTitles = faqData.map((item, index) => (
    <li
      key={index}
      onClick={() => setVisibleTab(item.id)}
      className={visibleTab === item.id ? ` ${style.tabTitle} ${style.tabActive}` : ` ${style.tabTitle}`}
    >
      {item.tabTitle}
    </li>
  ));

  const tabContent = faqData.map((item, index) => (
    <div className=" mt-6" key={index} style={visibleTab === item.id ? {} : { display: 'none' }}>
      <h4 className="font-medium my-2 text-2xl lg:text-3xl text-amcovad-black">{item.tabTitle}</h4>
      <div className="flex flex-col justify-center items-center w-full">
        <AccordionLayout options={item.tabContent} />
      </div>
    </div>
  ));
  return (
    <>
      <Navbar />
      <div>
        <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
          <div className="w-screen mx-auto">
            <div className=" w-full pt-20 lg:pt-16 ">
              <Image src={faqImg} className="h-96" alt="contact page image" />
            </div>
          </div>

          <div className=" py-6 px-2 lg:py-12 mx-auto lg:max-w-2xl">
            <ul className="flex flex-wrap justify-start lg:space-x-5 list-none border-b-[1px] border-[#C4C4C4]">
              {tabTitles}
            </ul>

            <div className={`${style.tabContent} `}>{tabContent}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
