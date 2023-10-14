import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBasketOpen: false,
    basket: localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : [],
    totalCount: localStorage.getItem('totalCount') ? JSON.parse(localStorage.getItem('totalCount')) : 0,
    quantity: 0,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        openBasket: (state, action) => {
            state.isBasketOpen = action.payload
        },
        addToBasket: (state, action) => {
            const isExisting = state.basket.find(item => item.id === action.payload.id)
            if (isExisting) {
                isExisting.quantity += 1
            }
            else {
                state.basket.push({ ...action.payload, quantity: 1 })
            }
            state.totalCount += 1

            localStorage.setItem('basketItems', JSON.stringify(state.basket));
            localStorage.setItem('totalCount', (state.totalCount));
        },
        deleteFromBasket: (state, action) => {
            const item = state.basket.find(item => item.id === action.payload)
            const newCart = state.basket.filter(item => item.id !== action.payload)
            state.basket = newCart
            state.totalCount -= item.quantity
            localStorage.setItem('basketItems', JSON.stringify(state.basket));
            localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
        },
        decrementCart: (state, action) => {
            state.basket = state.basket.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    item.quantity -= 1
                    state.totalCount -= 1
                }
                return item
            }
            )

        },
        incrementCart: (state, action) => {
            state.basket = state.basket.map(item => {
                if (item.id === action.payload) {

                    item.quantity += 1
                }
                return item
            }
            )
            state.totalCount += 1
        }
    }
})

export const { openBasket, addToBasket, deleteFromBasket, decrementCart, incrementCart } = basketSlice.actions

export default basketSlice.reducer

