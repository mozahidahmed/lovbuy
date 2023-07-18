'use client';


import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Features/Products/ProductsSlice';
import cartReducer from './Features/Cart/CartSlice';


export const store = configureStore({
    reducer: {
        carts: cartReducer,
        products: productsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;