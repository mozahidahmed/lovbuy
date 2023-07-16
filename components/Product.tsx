import React from 'react'
import ProductCard from './product/ProductCard'

const Product = () => {
  const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold'>Product Section</h1>
      <div className='grid lg:grid-cols-4 py-16 gap-2'>
        {product.map((p) => {
          return <ProductCard />
        })}
      </div>
    </div>
  )
}

export default Product
