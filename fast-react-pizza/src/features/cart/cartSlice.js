import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Define cart-related reducers here
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload.pizzaId
            )
        },
        clearCart(state) {
            state.cart = []
        },
        increaseQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload.pizzaId
            )

            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload.pizzaId
            )
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
        },
    },
})

export const {
    addItem,
    deleteItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalCartPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
}

export const getTotalCartQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
}

export const getItemQuantity = (id) => (state) => {
    return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
}
//having these exports here can cause problems in large applications
// look into useing reselect for this in the future
