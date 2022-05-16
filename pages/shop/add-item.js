import React, { useState } from 'react';
import { Button, Footer, Input, Navbar } from '@/components/index';
import HookForm from '@/components/form/Form';
import * as yup from 'yup';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  editProduct,
  productData,
  deleteProduct,
  resetCart,
  markFavourite
} from '../../app/reducers/productSlice';

export const SingleProduct = ({ id, name, price, favourite }) => {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);

  return (
    <tr className="text-gray-700 ">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-16 h-16 mr-3 md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://cdn.shopify.com/s/files/1/1119/4994/products/1_38fcd649-b88a-4290-997d-422d0808d9a7.jpg"
              alt=""
            />
            <div className="absolute inset-0 rounded-full shadow-inner" />
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-xs">
        <div>
          <p className="font-semibold text-base">{name}</p>
        </div>
      </td>
      <td className="px-4 py-3 text-base">₦{price}</td>

      <td className="px-4 py-3">
        <div className="flex items-center space-x-4 text-sm">
          {favourite ? (
            <span
              onClick={() => {
                dispatch(markFavourite({ id }));
              }}
              className="px-2 py-1 cursor-pointer font-semibold leading-tight text-white bg-amcovad-danger rounded-full"
            >
              ❤
            </span>
          ) : (
            <span
              onClick={() => {
                dispatch(markFavourite({ id }));
              }}
              className="px-2 py-1 cursor-pointer font-semibold leading-tight text-white bg-amcovad-primary-400 rounded-full"
            >
              ✔
            </span>
          )}

          <button
            onClick={() => setEditModal(true)}
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-amcovad-primary-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit"
          >
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button
            onClick={() => {
              dispatch(deleteProduct({ id }));
            }}
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Delete"
          >
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </td>

      {editModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setEditModal(false)}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-xl mx-auto bg-amcovad-secondary-100 rounded-md shadow-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <h4 className="text-lg font-medium text-amcovad-secondary-700">Edit Product</h4>
                <button
                  className="p-2 text-black rounded-md hover:bg-amcovad-secondary-300"
                  onClick={() => setEditModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <EditForm id={id} name={name} price={price} closeModal={() => setEditModal(false)} />
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

export const EditForm = ({ id, name, price, closeModal }) => {
  const dispatch = useDispatch();
  const onSubmit = ({ name, price }) => {
    dispatch(editProduct({ id, name, price }));
    dispatch(closeModal);
  };
  return (
    <HookForm onSubmit={onSubmit} defaultValues={{ name, price }} schema={ProductSchema}>
      <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500 ">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full ">
            <Input label="Name" name="name" type="text" />
          </div>
          <div className="col-span-full ">
            <Input label="Price" name="price" type="number" />
          </div>
          <div className="col-span-full ">
            <Input label="Image URL" name="image" type="file" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 mt-5 border-t">
        <Button primary className="text-white h-12 px-9  ">
          Update item
        </Button>

        <Button onClick={closeModal} outline>
          Cancel
        </Button>
      </div>
    </HookForm>
  );
};

export const ProductSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    price: yup.string().required('Price is required')
  })
  .required();

const AddItem = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(productData);

  const isEmptyCart = productsList.length === 0;

  const [modal, setModal] = useState(false);

  const onSubmit = (data) => {
    dispatch(addProduct({ ...data, favourite: false }));
    dispatch(() => setModal(false));
  };

  return (
    <>
      <Navbar />
      <div className=" 2xl:container pt-10 2xl:mx-auto overflow-hidden">
        <div className="pt-4 lg:pt-12 pb-12 px-4">
          <div className="ml-20 max-w-7xl flex flex-col md:flex-row">
            <div className="w-full lg:w-2/3 mx-auto">
              <div className=" md:px-12 lg:px-0  ">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-amcovad-secondary-600 ">All items </h2>
                  <Button onClick={() => setModal(true)} className="text-white h-12 px-9  ">
                    Add New
                  </Button>
                </div>

                <p className="text-sm py-6 font-normal text-amcovad-secondary-500">
                  Amazing products Everyday Start Shopping now!
                </p>
              </div>

              {modal && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setModal(false)}
                  ></div>
                  <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-xl mx-auto bg-amcovad-secondary-100 rounded-md shadow-lg">
                      <div className="flex items-center justify-between p-4 border-b">
                        <h4 className="text-lg font-medium text-amcovad-secondary-700">Add New Product</h4>
                        <button
                          className="p-2 text-black rounded-md hover:bg-amcovad-secondary-300"
                          onClick={() => setModal(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mx-auto"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      <HookForm onSubmit={onSubmit} schema={ProductSchema}>
                        <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500 ">
                          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full ">
                              <Input label="Name" name="name" type="text" />
                            </div>
                            <div className="col-span-full ">
                              <Input label="Price" name="price" type="number" />
                            </div>
                            <div className="col-span-full ">
                              <Input label="Image URL" name="image" type="file" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 mt-5 border-t">
                          <Button primary className="text-white h-12 px-9  ">
                            Add item
                          </Button>

                          <Button onClick={() => setModal(false)} outline>
                            Cancel
                          </Button>
                        </div>
                      </HookForm>
                    </div>
                  </div>
                </div>
              )}

              {!isEmptyCart ? (
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                          <th className="px-4 py-3">Image</th>
                          <th className="px-4 py-3">Product Name</th>
                          <th className="px-4 py-3">Amount</th>

                          <th className="px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y  ">
                        {/* {productsList.map(({ id, name, price, favourite }, index) => (
                          <SingleProduct key={index} id={id} name={name} price={price} favourite={favourite} />
                        ))} */}

                        {productsList.map((product, index) => (
                          <SingleProduct key={index} {...product} />
                        ))}
                      </tbody>
                    </table>
                    <div className="flex justify-end">
                      <Button
                        onClick={() => {
                          dispatch(resetCart());
                        }}
                        className="text-white h-12 px-9  "
                      >
                        Clear List
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-10 rounded-md border-2 border-dashed border-amcovad-primary-500">
                  <h2 className="text-center text-4xl font-semibold text-amcovad-secondary-700 ">Cart is empty</h2>
                  <p className="text-center">Look like you have no items in your shopping cart </p>
                  <Button onClick={() => setModal(true)} className="text-white h-12 4 lg:px-9  ">
                    Add Item
                  </Button>
                </div>
              )}

              <div className="flex p-4  justify-center">
                <Button outline className=" px-4 py-3">
                  <Link passHref href="/shop/favourite">
                    👉 Goto Favorite Page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddItem;
