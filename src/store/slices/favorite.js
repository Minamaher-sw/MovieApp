
import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState :{favorite: [], counter: 0},
    reducers: {
        addFavorite: (state, action) => {
            state.favorite.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorite = state.favorite.filter(movie => movie.id !== action.payload);
        },
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        }
    },
});

export const { addFavorite, removeFavorite, increment, decrement } = favoriteSlice.actions;
export default favoriteSlice.reducer;