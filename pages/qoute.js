import React, { useState } from 'react';
import { Footer, Navbar } from '@/components/index';
import HookForm from '@/components/form/Form';
import { Button, Textarea } from '@/components/index';
import * as yup from 'yup';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, selectQuote } from '../app/reducers/quoteSlice';
import { increment } from '../app/reducers/counterSlice';

const Quote = () => {
  const quote = useSelector(selectQuote);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(add(data));
    dispatch(increment());
  };

  const quoteSchema = yup
    .object({
      quote: yup.string().required('Quote is required')
    })
    .required();

  const styles = {
    row: 'container mx-auto w-full',
    value: 'text-lg',
    button:
      'inline-flex items-center px-5 py-2.5 mx-4 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    textbox:
      'px-5 py-2.5 mx-4 shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-500 rounded-md',
    asyncButton:
      'inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
    amountButton:
      'inline-flex items-center px-5 py-2.5 mr-5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
  };

  return (
    <>
      <Navbar />
      <section className="bg-about-background">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mt-20 lg:mt-10 lg:max-w-2xl">
            <div className="relative bg-gray-50">
              <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-500 sm:text-4xl">
                  <span className="block mb-5">Current Quote</span>
                </h2>
                <div className={styles.row}>
                  <HookForm onSubmit={onSubmit} schema={quoteSchema}>
                    {quote.map(({ id, text }) => (
                      <SingleQuote key={id} id={id} text={text} />
                    ))}

                    <Textarea name="quote" />
                    <Button className="w-full font-semibold text-amcovad-black py-2.5 px-5">Add Quote</Button>
                  </HookForm>

                  <Link href="/counter" passHref>
                    <a className="block mt-5 text-indigo-500">Go to Counter Page</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export const SingleQuote = ({ id, text }) => {
  const dispatch = useDispatch();

  return (
    <article>
      <div className="relative p-3 mb-5 text-red-700 bg-red-100 border border-amcovad-danger">
        {text}
        <span
          onClick={() => dispatch(remove(id))}
          className="absolute inline-block cursor-pointer top-2 right-5 hover:text-blue-600"
        >
          X
        </span>
      </div>
    </article>
  );
};

export default Quote;
