import React from 'react'
import { AiFillLock, AiOutlineStar } from 'react-icons/ai'
import AddToCartSection from './AddToCartSection'
import { BsBoxSeam, BsShieldLock, BsPinterest } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'

type Props = {}

const DetailSection = (props: Props) => {
  return (
    <div>
      <h4 className="text-sm text-gray-600">Home / Product / Product Name</h4>
      <h1 className=" py-6 text-2xl">Product Name</h1>
      <h2>
        <span className="text-xl font-semibold text-orange-500">$ 420.33</span>{' '}
        <span className="px-4 text-lg">
          {' '}
          <del>$ 450.00</del>
        </span>
        <span className="bg-orange-500 px-2 py-0.5 text-xs">-3%</span>
      </h2>

      {/* Rating Section*/}
      <div className="mb-8 mt-2 flex items-baseline gap-4">
        <div className="flex text-red-500">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <span className="text-sm text-gray-600">No reviews</span>
      </div>

      <div className="h-0.5 bg-gray-500"></div>

      {/* Add cart and buy now section */}
      <AddToCartSection />

      <div className="my-8 h-0.5 bg-gray-500"></div>
      <div>
        <div className="flex">
          <h3 className="mr-4 text-gray-600">Vendor:</h3>
          <h3>Lolita</h3>
        </div>
        <div className="flex">
          <h3 className="mr-4 text-gray-600">Type:</h3>
          <h3>Sweaters</h3>
        </div>
        <div className="flex">
          <h3 className="mr-4 text-gray-600">Sku:</h3>
          <h3 className="">p13567835</h3>
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
        <BsBoxSeam /> Spend $1,000.00 for Free Shipping
      </div>

      {/* Social share */}
<h2 className='mt-8 font-semibold'>Share:</h2>
      <div className="mt-2 flex items-center gap-16">
        <button className='flex gap-2 items-center'>
          <CgFacebook /> Facebook
        </button>
        <button className='flex gap-2 items-center'>
          <FaTwitter /> Tweet
        </button>
        <button className='flex gap-2 items-center'>
          {' '}
          <BsPinterest /> Pin it
        </button>
      </div>
    </div>
  )
}

export default DetailSection
