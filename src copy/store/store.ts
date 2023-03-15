import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";
export const myStore = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;