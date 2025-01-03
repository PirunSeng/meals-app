import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    // reducers are functions used to change the state
    reducers: {
        addFavorite: (latestState, action) => {
            latestState.ids.push(action.payload.id);
        },
        removeFavorite: (latestState, action) => {
            latestState.ids.splice(latestState.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;