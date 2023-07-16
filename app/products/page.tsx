'use client';
import React, { useEffect, useState } from 'react';
import useProducts from '@/components/Hooks/useProducts';
import ProductsComp from '@/components/Products/Products';


const page = () => {

    return (
        <div className='w-full'>
            <ProductsComp/>
        </div>
    );
};

export default page;