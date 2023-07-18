'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'
import Image from 'next/image'
import {
  countTotalPrice,
  quantityDecreaseByOne,
  quantityIncreaseByOne,
  removeAll,
  removeOne,
} from '../GlobalRedux/Features/Cart/CartSlice'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { BsArrowBarLeft } from 'react-icons/bs'

type Props = {}

const Cart = (props: Props) => {
  const { cart, totalPrice } = useSelector((state: RootState) => state.carts)
  const { push } = useRouter()

  const dispatch = useDispatch()
  // One Product Remove
  const oneProductRemove = (id: string) => {
    dispatch(removeOne(id))
  }

  useEffect(() => {
    dispatch(countTotalPrice())
  }, [cart])

  return (
    <div className="min-h-[60vh]">
      <div className=" my-10 bg-red-50 py-16">
        <div className="mx-auto max-w-6xl">
          <div>
            Home /<span className="text-orange-500"> Your Shopping Cart</span>
          </div>
        </div>
      </div>
      {cart.length > 0 ? (
        <div className=" mx-auto mb-16 max-w-6xl">
          <div className=" mb-10 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((c) => {
                  const { id, name, image, quantity, price } = c
                  return (
                    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                      <td className="w-32 p-4">
                        <Image
                          src={image}
                          alt="Product Image"
                          height={100}
                          width={100}
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        $ {price}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => dispatch(quantityDecreaseByOne(id))}
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="h-3 w-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2">
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="block w-14 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              disabled
                              value={quantity}
                              required
                            />
                          </div>
                          <button
                            onClick={() => dispatch(quantityIncreaseByOne(id))}
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="h-3 w-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18">
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        $ {price * quantity}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => oneProductRemove(id)}
                          className="font-medium text-red-600 hover:underline dark:text-red-500">
                          Remove
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="text-right text-2xl font-bold my-5">Total: <span className="text-3xl">${totalPrice}</span></div>
          <div className=" right-6 flex   gap-10">
            <button
              onClick={() => push('/products')}
              className="my-2  w-full  bg-orange-500 px-3 py-4 text-gray-100 duration-200 hover:bg-orange-400 ">
              Continue Shopping
            </button>
            <button
              onClick={() => dispatch(removeAll())}
              className="my-2  w-full bg-red-600 py-4 text-gray-100 duration-200 hover:bg-red-400 ">
              Clear Cart
            </button>

            <button
              onClick={() => {
                toast.error('Coming Soon!! ')
              }}
              className="my-2  w-full bg-lime-600 py-4 text-gray-100 duration-200 hover:bg-lime-500 ">
              Go to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center ">
          <div>
            <h1 className="mt-10 text-center text-3xl">
              Shopping Cart is Empty !
            </h1>
            <Image
              className="mx-auto my-10"
              src={
                'https://cdn.shopify.com/s/files/1/0132/3116/1408/files/cart.png?13612'
              }
              alt="No product Image"
              height={150}
              width={150}
            />
            <h3 className="te text-center text-sm">
              You Have No Items In Your Shopping Cart.
            </h3>

            <button
              onClick={() => push('/products')}
              className="mx-auto mb-20 mt-5 flex items-center justify-center duration-200 hover:text-orange-500">
              <BsArrowBarLeft /> Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
