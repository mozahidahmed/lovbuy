import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import AddToCartSection from './AddToCartSection'

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
      <div className="flex items-baseline gap-4 mt-2 mb-8">
        <div className="flex text-red-500">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <span className="text-sm text-gray-600">No reviews</span>
      </div>
      <div className='h-0.5 bg-gray-500'></div>
      {/* Add cart and buy now section */}
      <AddToCartSection/>

    </div>
  )
}

export default DetailSection
