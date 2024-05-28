import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartReduces";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store