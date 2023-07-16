'use client';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from '@/components/Others/Loading';

const page = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://lovbuy-ecommerce-server.vercel.app/api/v1/products');
                if (!response.ok) {
                    throw new Error('An error occurred while fetching products');
                }
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    const allProducts = products?.data?.result;

    console.log("all products", allProducts);
    return (
        <div className=''>
            <h1 className="">Hello, Products Page !</h1>
        </div>
    );
};

export default page;