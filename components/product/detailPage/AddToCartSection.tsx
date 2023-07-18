'use client'

import { CartContext } from '@/components/Context/Cart'
import PayButton from '@/components/Others/PayButton/PayButton'
import React, { ChangeEvent, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { BsHeart } from 'react-icons/bs'

type Props = {
  data: {
    _id: string
    stock: number
    name: string
    description: string
    category: string
    images: [string]
    price: number
    sale: number
  }
}

const AddToCartSection = ({ data }: Props) => {
  const { _id, stock, name, images, price, description, category,sale } = data

  // Color
  const colors = ['red', 'green', 'orange', 'blue']
  const [selectedColor, setSelectedColor] = useState(colors[0])

  //   Size
  const sizes = ['sx', 'm', 'lg', '2xl']
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  //   cart count
  const [cartCount, setCartCount] = useState(1)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (value > 1) {
      setCartCount(value)
    }
  }

  // Add to cart
  const { cart, setCart } = useContext<any>(CartContext)


  const addToCart = () => {
    const isExist = cart.find((c: any) => c.id === _id)
    if (isExist) {
      toast.error('This product already added!')
      return
    } else {
      setCart([
        ...cart,
        {
          id: _id,
          name: name,
          image: images[0],
          price: price,
          quantity: cartCount,
        },
      ])
      toast.success('Successfully added')
    }
  }

  const itemPrice = sale ? (price - (price * sale / 100)).toFixed(2) : price.toFixed(2);
  const itemDescription = description.slice(1, 70);

  const item = [
    {
      id: _id,
      name: name,
      description: itemDescription,
      category: category,
      image: images[0],
      price: itemPrice,
    }
  ]

  return (
    <div className="mt-8">
      {/* Color and Size Section*/}

      {/* Color */}
      <div className="mb-4">
        <h3>Color:</h3>
        <div className="mt-2 flex gap-4">
          {colors.map((c) => (
            <button
              onClick={() => setSelectedColor(c)}
              className={`bg-${c}-600   h-6 w-8 ${selectedColor === c && 'ring-4'
                } ring-red-400`}></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-10">
        <h3>Size:</h3>
        <div className="mt-2 flex gap-4">
          {sizes.map((s) => (
            <button
              onClick={() => setSelectedSize(s)}
              className={` border-2 px-2.5 py-0.5 uppercase ${selectedSize === s && ' border-red-600'
                } border-gray-600`}>
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="items-center justify-between gap-5 md:flex">
        <div className="flex w-1/3  items-center justify-center border-2 border-gray-300   px-0.5 py-1.5 md:w-1/5">
          {/* Decrease BTN */}
          <button
            className="text-3xl"
            onClick={() => {
              if (cartCount > 1) {
                setCartCount(cartCount - 1)
              }
            }}>
            -
          </button>
          <input
            onChange={handleInputChange}
            value={cartCount}
            className="w-full border-0  text-center text-gray-500 focus:outline-none focus:ring-0 disabled:border"
            type="text"
          />
          {/* Increase BTN */}
          <button
            className="text-3xl"
            onClick={() => setCartCount(cartCount + 1)}>
            +
          </button>
        </div>
        <button
          onClick={addToCart}
          className="my-2 block w-full bg-orange-500 py-4 text-gray-100 duration-200 hover:bg-orange-400 md:w-2/5">
          Add to Cart
        </button>
        {/* <button className="w-full bg-lime-600  py-4 duration-200 hover:bg-lime-400 md:w-2/5 ">
          Buy it now{' '}
        </button> */}
        <PayButton checkoutItems={item} />
      </div>
      <button className="my-4 flex items-center justify-start gap-3 py-4 duration-300 hover:text-orange-500">
        <BsHeart /> <span>Add to wishlist</span>
      </button>

      <p>Available Stock: {stock}</p>
    </div>
  )
}

export default AddToCartSection
