import React from 'react';
import { Button, Footer, Navbar } from '@/components/index';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" 2xl:container pt-10 2xl:mx-auto overflow-hidden">
        <div className="pt-4 lg:pt-12 pb-12 px-4">
          <div className="ml-20 max-w-7xl flex flex-col md:flex-row">
            <div className="w-full lg:w-2/3 mx-auto">
              <div className=" md:px-12 lg:px-0  ">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-amcovad-secondary-600 ">Favorites Products </h2>
                </div>

                <p className="text-sm py-6 font-normal text-amcovad-secondary-500">
                  Amazing products Everyday Start Shopping now!
                </p>
                <div className="py-16 bg-amcovad-secondary-100">
                  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="grid gap-12 md:grid-cols-2">
                      <div className="group space-y-4 rounded-3xl">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1119/4994/products/1_38fcd649-b88a-4290-997d-422d0808d9a7.jpg"
                          alt="art cover"
                          loading="lazy"
                          className="h-80 w-full object-cover object-top rounded-3xl transition duration-500 hover:scale-105"
                        />
                        <div className="space-y-2">
                          <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-gray-700">Products Name </h4>
                            <p className="text-gray-600">Price : #6000</p>
                          </div>
                        </div>
                      </div>
                      <div className="group space-y-4 rounded-3xl">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1119/4994/products/1_38fcd649-b88a-4290-997d-422d0808d9a7.jpg"
                          alt="art cover"
                          loading="lazy"
                          className="h-80 w-full object-cover object-top rounded-3xl transition duration-500 hover:scale-105 "
                        />
                        <div className="space-y-2">
                          <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-gray-700">Products Name </h4>
                            <p className="text-gray-600">Price : #6000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-4  justify-center">
                  <Button outline className=" px-4 py-3">
                    <Link passHref href="/shop/add-item">
                      👉 Goto item Page
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;