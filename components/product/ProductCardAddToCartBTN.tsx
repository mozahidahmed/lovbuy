'use client'

import { addToCart } from '@/app/GlobalRedux/Features/Cart/CartSlice'
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

type Props = {
  data: {
    _id: string
    name: string
    images:[string]
    price:number
  }
}

const ProductCardAddToCartBTN = ({ data }: Props) => {
    const{_id,name,images,price}=data
  const dispatch = useDispatch()
  const addCart = () => {
    dispatch(
      addToCart({
        id: _id,
        name: name,
        image: images[0],
        price: price,
        quantity: 1,
      })
    )
  }

  return (
    <div
      onClick={addCart}
      className="p-3 text-green-600 duration-300 hover:bg-gray-100 hover:text-yellow-500 cursor-pointer">
      <BsFillCartPlusFill />
    </div>
  )
}

export default ProductCardAddToCartBTN
