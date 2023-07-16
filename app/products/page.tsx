'use client';
import React, { useEffect, useState } from 'react';
import useProducts from '@/components/Hooks/useProducts';
import ProductsComp from '@/components/Products/Products';


const page = () => {
    const {products} = useProducts();


    const allProducts = products?.data?.result;

    console.log("all products", allProducts);
    return (
        <div className=''>
            <h1 className="">Hello, Products Page !</h1>
            <ProductsComp/>
        </div>
    );
};

export default page;