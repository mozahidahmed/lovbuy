'use client'
import React, { ChangeEvent, useState } from 'react'
import { BsHeart, BsHeartArrow } from 'react-icons/bs'

type Props = {}

const AddToCartSection = (props: Props) => {
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
              className={`bg-${c}-600   h-6 w-8 ${
                selectedColor === c && 'ring-4'
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
              className={` border-2 px-2.5 py-0.5 uppercase ${
                selectedSize === s && ' border-red-600'
              } border-gray-600`}>
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="flex w-1/5 items-center justify-center border-2  border-gray-500 bg-[#E5E7EB] px-0.5 py-1.5">
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
            className="w-full border-0 bg-[#E5E7EB] text-center text-gray-500 focus:outline-none focus:ring-0 disabled:border"
            type="text"
          />
          {/* Increase BTN */}
          <button
            className="text-3xl"
            onClick={() => setCartCount(cartCount + 1)}>
            +
          </button>
        </div>
        <button className="w-2/5 bg-orange-500 py-4 text-gray-100 duration-200 hover:bg-orange-400">
          Add to Cart
        </button>
        <button className="w-2/5  bg-lime-600 py-4 duration-200 hover:bg-lime-400 ">
          Buy it now{' '}
        </button>
      </div>
      <button className="my-4 flex items-center justify-start gap-3 py-4 duration-300 hover:text-orange-500">
        <BsHeart /> <span>Add to wishlist</span>
      </button>

      <p>Available Quantity: 138</p>
    </div>
  )
}

export default AddToCartSection
