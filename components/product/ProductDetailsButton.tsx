'use client'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  id: string | number
}

const ProductDetailsButton = ({ children, id }: Props) => {
  const { push } = useRouter()

  return (
    <div
      className=" cursor-pointer duration-300 hover:-translate-y-1"
      onClick={() => push(`/products/${id}`)}>
      {children}
    </div>
  )
}

export default ProductDetailsButton
