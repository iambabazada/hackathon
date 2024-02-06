import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './basketSlice'
import authSlice from './authSlice'

export const store = configureStore({
    reducer: {
        // products: productSlice,
        basket: basketSlice,
        auth: authSlice
    },
})