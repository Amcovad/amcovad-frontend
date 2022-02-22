import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const BlogCard = ({ article, src, press_release }) => {
  return (
    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
      <div className=" w-full h-56 md:h-64 xl:h-80">
        <Image src={src} width="400" height="300" className="object-cover " alt="blogs images" />
      </div>
      <div className="absolute  inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-[0.6] opacity-0 hover:opacity-100">
        <div className="absolute bottom-5">
          <p className="mb-2  text-base font-normal text-amcovad-white">PRESS RELEASE . {press_release} </p>
          <p className="text-sm font-Inter tracking-wide font-bold text-amcovad-white">
            <Link href="#" passHref>
              {article}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
