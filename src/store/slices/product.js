import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../instant/instance";

export const productAction = createAsyncThunk(
    "products/getAll",
    async (page = 1) => {
        const res = await instance.get("/movie/popular", {
        params: { 
            api_key: "2a71efe2358e73c9d5eb7fb1e08a1970",
            page: page
        }
        });
        return res.data.results;
    }
);
const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
    builder
        .addCase(productAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(productAction.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
        .addCase(productAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            console.error("Error fetching products:", action.error);
        });
    }
});

export default productSlice.reducer;