import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsSidebar from "../Others/Sidebars/ProductsSidebar";
import useProducts from "../Hooks/useProducts";
import Loading from "../Others/Loading";

const ProductsComp = () => {

    const { products } = useProducts();
    const [search, setSearch] = useState([]);
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [checkboxFilter, setCheckboxFilter] = useState([]);
    const [reviewFilter, setReviewFilter] = useState([]);

    const Products = products?.data?.result;

    /* ----------------------------------------------------------------*/
    /*                  Products Category wise Length                   */
    /* ----------------------------------------------------------------*/

    const WebDesign = Products?.filter(product => product?.category === "Web Design");
    const WebDevelopment = Products?.filter(product => product?.category === "Web Development");
    const GraphicsDesign = Products?.filter(product => product?.category === "Graphics Design");
    const SpokenEnglish = Products?.filter(product => product?.category === "Spoken English");
    const Others = Products?.filter(product => product?.category === "Others");



    /* ----------------------------------------------------------------*/
    /*                     Filter By Name Search                       */
    /* ----------------------------------------------------------------*/
    const handleSearchResult = (e) => {
        const searchText = e.target.value;
        const result = Products?.filter((product) =>
            product?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
            product?.category?.toLowerCase().includes(searchText.toLowerCase()) ||
            product?.seller?.toLowerCase().includes(searchText.toLowerCase())
        );
        setCategoryProduct([]);
        setCheckboxFilter([]);
        setReviewFilter([]);
        setSearch(result);
    }

    /* ----------------------------------------------------------------*/
    /*                   Filter By Products Category                    */
    /* ----------------------------------------------------------------*/
    const filterByCategory = (e) => {
        const Category = e.target.value;

        if (Category === "All Products") {
            setCategoryProduct(Products)
        };

        if (Category === "Others") {
            const CProducts = Products?.filter((product) =>
            (product?.category?.toLowerCase().includes("Cap".toLowerCase()) ||
                product?.category?.toLowerCase().includes("Bottle".toLowerCase()) ||
                product?.category?.toLowerCase().includes("Earphones".toLowerCase()))
            );

            // console.log(CProducts);

            setCategoryProduct(CProducts)
        };

        const result = Products?.filter(product => product?.category === Category);

        setSearch([]);
        setCheckboxFilter([]);
        setReviewFilter([]);
        setCategoryProduct(result);
    };

    console.log("categoryProduct",categoryProduct);

    /* ----------------------------------------------------------------*/
    /*                  Filter By Checkbox Category                    */
    /* ----------------------------------------------------------------*/
    const handleFilterByCheckbox = (e) => {
        const Category = e.target.value;

        if (e.target.checked) {
            setCheckboxFilter([...checkboxFilter, Category]);
        } else {
            setCheckboxFilter(checkboxFilter?.filter(category => category !== e.target.value));
        };

        setSearch([]);
        setReviewFilter([]);
        setCategoryProduct([]);
    };

    const selectedResult = Products?.filter(({ category }) => checkboxFilter?.includes(category));

    /* ----------------------------------------------------------------*/
    /*                       Filter By Ratings                         */
    /* ----------------------------------------------------------------*/
    const handleReviewFilter = (num) => {
        if (num) {
            const filterData = Products?.filter((pd) => Math.ceil(pd?.ratings) === parseInt(num));
            setSearch([]);
            setCategoryProduct([]);
            setCheckboxFilter([]);
            setReviewFilter(filterData);
        }
    };



    // Load Products By Filter Type
    let loadProducts;

    if (categoryProduct?.length > 0) {
        loadProducts = categoryProduct
    }
    else if (selectedResult?.length > 0) {
        loadProducts = selectedResult
    }
    else if (search?.length > 0) {
        loadProducts = search
    }
    else if (reviewFilter?.length > 0) {
        loadProducts = reviewFilter
    }
    else {
        loadProducts = Products
    };

    return (
        <div className="w-full">
            <div className="py-3">
                <h3 className="text-4xl font-bold text-center py-4">
                    User Interface Products
                </h3>
                <p className="text-center text-xl">Building the Future</p>
            </div>
            <div className="">
                <div className="bg-base-100">
                    <div className="container mx-auto pb-10">
                        <div className="grid grid-cols-1 relative lg:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
                            <div className="col-span-1">
                                <div className="sticky top-20">
                                    <aside>
                                        <div className="md:mb-3 pb-10">
                                            <ProductsSidebar WebDesign={WebDesign} WebDevelopment={WebDevelopment} GraphicsDesign={GraphicsDesign} SpokenEnglish={SpokenEnglish} Others={Others} handleSearchResult={handleSearchResult} handleFilterByCheckbox={handleFilterByCheckbox} handleReviewFilter={handleReviewFilter} />
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-5">
                                    <h3 className="text-gray-400 font-bold">Showing <span className="text-gray-500">{loadProducts?.length}</span> Total Results.</h3>
                                    <div className="flex justify-between items-center gap-2 px-7">
                                        <h3 className="text-gray-700 font-bold">Sort By:</h3>
                                        <select onChange={filterByCategory} className="select bg-gray-700 max-w-xs">
                                            <option disabled selected>Select Course</option>
                                            <option>All Products</option>
                                            <option>Men's Sneaker</option>
                                            <option>Men's Pants</option>
                                            <option>Men's T-Shirt</option>
                                            <option>Men's Boot</option>
                                            <option value="Bag">Men's Bags</option>
                                            {/* <option>Others</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full pt-7 grid grid-cols-1 gap-6 sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 mx-auto">
                                    {loadProducts?.length ?
                                        loadProducts?.map((data, index) => (
                                            <ProductsGrid product={data} key={index} />
                                        )) :
                                        <div className="w-screen -ml-28 lg:-ml-44 -mt-20 flex justify-center mx-auto">
                                            <Loading />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsComp;