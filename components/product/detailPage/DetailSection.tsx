import React from 'react'
import { AiFillLock, AiOutlineStar } from 'react-icons/ai'
import AddToCartSection from './AddToCartSection'
import { BsBoxSeam, BsShieldLock, BsPinterest } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
import Ratings from './Ratings'

type InfoProps = {
  info: {
    _id: string
    sku: string
    name: string
    price: number
    stock: number
    ratings: number
    shipping: number
    seller: string
    category: string
    ratingsCount: number
    quantity: number
    images: [string]
  }
}

const DetailSection = ({ info }: InfoProps) => {
  const { _id, name, price, stock, images, ratings, shipping, seller, quantity, category, sku, ratingsCount } = info

  return (
    <div>
      <h4 className="mt-8 hidden text-sm text-gray-600 md:mt-0 md:block">
        Home / Products / {name}
      </h4>
      <h1 className=" py-6 text-2xl">{name}</h1>

      <h2>
        <span className="text-xl font-semibold text-orange-500 ">
          $ {price.toFixed(2)}
        </span>{' '}
        <span className="px-4 text-lg">
          {' '}
          <del>$ {((3 * price) / 100 + price).toFixed(2)}</del>
        </span>
        <span className="bg-orange-500 px-2 py-0.5 text-xs text-gray-100">
          -3%
        </span>
      </h2>

      {/*-------------------------------------------------------------------------------------- 
                                           Rating Section 
      ---------------------------------------------------------------------------------------*/}
      <div className="mb-8 mt-2 flex items-baseline gap-4">
        <Ratings ratings={ratings} />
        <span className="text-sm text-gray-600">{ratingsCount} reviews</span>
      </div>

      <div className="h-0.5 bg-gray-500"></div>

      {/* ------------------------------------------------------------------------------------
                              Add cart and buy now section 
      -------------------------------------------------------------------------------------*/}
      <AddToCartSection data={{ _id, name, images, price, stock }} />

      {/* ---------------------------------------------------------------------------------------
                                        Some Extra 
      -----------------------------------------------------------------------------*/}

      <div className="my-8 h-0.5 bg-gray-500"></div>
      <div>
        <div className="flex">
          <h3 className="mr-4 text-gray-600">Vendor:</h3>
          <h3>{seller}</h3>
        </div>
        <div className="flex">
          <h3 className="mr-4 text-gray-600">Type:</h3>
          <h3>{category}</h3>
        </div>
        <div className="flex">
          <h3 className="mr-4 text-gray-600">Sku:</h3>
          <h3 className="">{sku}</h3>
        </div>
      </div>

      <div className="my-8 h-0.5 bg-gray-500"></div>

      <div>
        <div className="mb-2 flex items-center justify-start gap-4">
          <AiFillLock /> Secure payment
        </div>
        <div className="mb-2 flex items-center justify-start gap-4">
          {' '}
          <BsShieldLock /> 2 Year Warranty
        </div>
        <div className="mb-2 ">
          {' '}
          <span className="mr-3">🔥</span>
          30 sold in last 18 hours
        </div>
      </div>
      <div className="mb-2 mt-6 flex items-center justify-start gap-4">
        {' '}
        <BsBoxSeam /> Spend $2,00.00 for Free Shipping
      </div>

      {/*------------------------------------------------------------------------------------
                                 Social share 
      ---------------------------------------------------------------------------------*/}
      <h2 className="mt-8 font-semibold">Share:</h2>
      <div className="mt-2 flex items-center gap-5 md:gap-16">
        <button className="flex items-center gap-2">
          <CgFacebook /> Facebook
        </button>
        <button className="flex items-center gap-2">
          <FaTwitter /> Tweet
        </button>
        <button className="flex items-center gap-2">
          {' '}
          <BsPinterest /> Pin it
        </button>
      </div>
    </div>
  )
}

export default DetailSection
