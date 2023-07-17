import Image from 'next/image'
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import ProductDetailsButton from './ProductDetailsButton'
import Ratings from './detailPage/Ratings'

interface DataProps {
  data: {
    _id: string
    category: string
    name: string
    seller: string
    price: number
    stock: number
    ratings: number
    ratingsCount: number
    images: [string]
    shipping: number
    quantity: number
  }
}

const ProductCard = ({ data }: DataProps) => {
  // Product Data Destructured
  const {
    _id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    images,
    shipping,
    quantity,
  } = data
  return (
    <ProductDetailsButton id={_id}>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6  shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-2  grid justify-center">
          <Image
            className=" object-cover"
            src={images[0]}
            alt="product img"
            width={550}
            height={50}
          />
        </div>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology
        </p>

        <h2>
          <span className="text-xl font-semibold text-orange-500">
            $ {price.toFixed(2)}
          </span>{' '}
        </h2>

        <div className="mt-4 flex items-center justify-between text-2xl">
          <Ratings ratings={ratings} />
          <div className="p-3 text-green-600 duration-300 hover:bg-gray-100 hover:text-yellow-500">
            <BsFillCartPlusFill />
          </div>
        </div>
      </div>
    </ProductDetailsButton>
  )
}

export default ProductCard
