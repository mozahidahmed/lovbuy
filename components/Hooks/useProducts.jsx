import React, { useEffect, useState } from 'react';
import Loading from '@/components/Others/Loading';

const useProducts = () => {
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

    return {products};
};

export default useProducts;