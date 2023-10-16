import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<FoodDataSimpleType> = []

export const FavoriteFoodSlice = createSlice({
    name: 'FavoriteFood',
    initialState: initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<FoodDataDetailType>) => {
            state.push({
                id: action.payload.id,
                dishName: action.payload.dishName,
                categories: action.payload.categories,
                image: action.payload.image,
            })
        },
        deleteFromFavorite: (state, action: PayloadAction<string>) => {
            const newFavoriteList = state.filter(item => item.id !== action.payload)
            return newFavoriteList
        }
    }
})


export const { addToFavorite, deleteFromFavorite } = FavoriteFoodSlice.actions

export default FavoriteFoodSlice.reducer