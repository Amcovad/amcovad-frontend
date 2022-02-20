import React from 'react';
import Image from 'next/image';
import { Blog1, Blog2, Blog3 } from '../assets';

const Blog = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative">Articles & Guide</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum et accumsan
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        <a href="#" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Blog1} alt="blogs images" />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-[0.6] opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
              <p className="text-sm tracking-wide text-gray-300">
                Painted between 1503 and 1517, Da Vincis alluring portrait has been dogged by two questions since the
                day it was made: Whos the subject and why is she smiling?
              </p>
            </div>
          </div>
        </a>

        <a href="#" aria-label="View Item">
          <div className=" hidden lg:block relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Blog2} alt="blogs images" />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-[0.6] opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
              <p className="text-sm tracking-wide text-gray-300">
                Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimts fin-de-siècle portrayal of
                intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau.
              </p>
            </div>
          </div>
        </a>
        <a href="#" aria-label="View Item">
          <div className="hidden lg:block relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Blog3} alt="blogs images" />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-[0.6] opacity-0 hover:opacity-100">
              <div className="bottom-2">
                <p className="mb-2 text-lg font-bold text-gray-100">The Harvesters</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Bruegels fanfare for the common man is considered one of the defining works of Western art. This
                  composition was one of six created on the theme of the seasons.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Blog;
