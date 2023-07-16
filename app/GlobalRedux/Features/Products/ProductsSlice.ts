'use client';

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface Product {
    // Define your product interface here
    // Example: id: number, name: string, price: number, etc.
}

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: '',
};

export const fetchProducts = createAsyncThunk('allProducts/fetchProducts', async () => {
    const allProducts = await axios.get(`https://lovbuy-ecommerce-server.vercel.app/api/v1/products`);
    return allProducts.data;
})



// const productsSlice = createSlice({
//     name:'product',
//     initialState,
//     reducers: {
//         actionName(state, action: PayloadAction) {
//           // Reducer logic here
//         },
//       },
//     extraReducers:(builder) => {
//         builder.addCase(fetchProducts.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(fetchProducts.fulfilled, (state,action) => {
//             state.loading = false
//             state.products = action.payload
//             state.error = ''
//         })
//         builder.addCase(fetchProducts.rejected, (state,action) => {
//             state.loading = false
//             state.products = []
//             state.error = action.error.message
//         })
//     }
// })

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        actionName(state, action: PayloadAction<Product>) {
            // Reducer logic here
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = '';
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = 'action.error.message';
        });
    },
});


export const { actionName } = productsSlice.actions;
export default productsSlice.reducer;