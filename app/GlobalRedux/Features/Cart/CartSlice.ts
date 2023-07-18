'use clint'

import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

export interface CartState {
    cart: any[];
}



const initialState: CartState = {
    cart: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.cart.find((c: any) => c.id === action.payload.id)

            if (isExist) {
                toast.error('This product already added!')
                return
            } else {
                state.cart = [...state.cart, { ...action.payload }]
                toast.success('Successfully added')
            }

        },

    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer