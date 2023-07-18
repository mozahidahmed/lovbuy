'use client'
import React from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'
import Link from 'next/link'

type Props = {}

const CartTotalBTN = (props: Props) => {
  // Add to cart
  const cart = useSelector((state: RootState) => state.carts.cart)

  return (
    <Link href={'/cart'} className="relative ml-10 cursor-pointer rounded-full bg-slate-300 p-2.5 text-xl">
      <span className=" absolute -right-1 -top-1 rounded-full bg-green-500 px-1.5 text-sm text-gray-50">
        {cart?.length}
      </span>
      <BsCartCheck className="text-orange-500" />
    </Link>
  )
}

export default CartTotalBTN
