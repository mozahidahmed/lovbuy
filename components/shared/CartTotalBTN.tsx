'use client'
import React, { useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../Context/Cart'

type Props = {}

const CartTotalBTN = (props: Props) => {
  const { cart } = useContext(CartContext)
  console.log('cart', cart);

  return (
    <div className="relative ml-10 rounded-full bg-slate-300 p-2.5 text-xl">
      <span className=" absolute -right-1 -top-1 rounded-full bg-green-500 px-1.5 text-sm text-gray-50">
        {cart?.length}
      </span>
      <BsCartCheck className="text-orange-500" />
    </div>
  )
}

export default CartTotalBTN
