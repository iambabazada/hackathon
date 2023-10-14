import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_URL } from '../api/api'

const initialState = {
    products: [],
    product: {},
    loading: false,
    error: null,
}

export const getProducts = createAsyncThunk('getProducts', async () => {
    const response = await axios.get(`${BASE_URL}/products?offset=4&limit=4`)
    console.log(response.data);
    return response.data

})

export const getProductsByCategory = createAsyncThunk('getProductsByCategory', async (category) => {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`)
    console.log(response.data);
    return response.data
})

export const getProductDetail = createAsyncThunk('getProductDetail', async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    console.log(response.data);
    return response.data
})


const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(getProductsByCategory.pending, (state, action) => {
            state.loading = true
        }
        )
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        }
        )
        builder.addCase(getProductsByCategory.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
        )
        builder.addCase(getProductDetail.pending, (state, action) => {
            state.loading = true
        }
        )
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        }
        )
        builder.addCase(getProductDetail.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
        )
    }
})


export default ProductSlice.reducer
