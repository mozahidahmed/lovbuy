import Image from 'next/image'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import ProductDetailsButton from './ProductDetailsButton'

interface DataProps {
  data: {
    // add data type here
  }
}

const ProductCard = ({ data }: DataProps) => {
  // Product Data Destructured
  const {} = data
  return (
    <ProductDetailsButton id={1}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="grid  justify-center mb-2">
          <Image src="/fi1.png" alt="product img" width={200} height={50} />
        </div>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology
        </p>

        <div className="flex justify-between text-2xl">
          <div className="flex text-red-500">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className="">
            <BsFillCartPlusFill />
          </div>
        </div>
      </div>
    </ProductDetailsButton>
  )
}

export default ProductCard
