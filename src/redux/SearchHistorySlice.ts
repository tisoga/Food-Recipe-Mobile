import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const inititalState: Array<string> = []

export const SearchHistorySlice = createSlice({
    name: 'SearchHistory',
    initialState: inititalState,
    reducers: {
        addSearchHistory: (state, action: PayloadAction<string>) => {
            if (state.includes(action.payload.toLowerCase())) return
            if (state.length >= 5) {
                state.reverse()
                state.pop()
                state.reverse()
                state.push(action.payload.toLowerCase())
            }
            else {
                state.push(action.payload.toLowerCase())
            }
        },
        deleteSearchHistory: (state, action: PayloadAction<string>) => {
            const newList = state.filter(item => item !== action.payload)
            return newList
        }
    }
})

export const { addSearchHistory, deleteSearchHistory } = SearchHistorySlice.actions

export default SearchHistorySlice.reducer