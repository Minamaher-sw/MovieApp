import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favorite.js"
import productReducer from "./slices/product.js"
export const store =configureStore({
    reducer:{
        sliceFavorite :favoriteReducer,
        sliceProduct:productReducer
    }
})

