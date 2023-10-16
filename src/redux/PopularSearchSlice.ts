import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type foodDetail = {
    id: string
    name: string
}

const initialState: Array<foodDetail> = [
    {
        id: 'a4e949ef-adfc-4a5d-bd9f-c9d7231f8669',
        name: 'Beef Steak'
    },
    {
        id: 'ea830918-32e4-4db9-aad7-4cf7d6027f05',
        name: 'Caesar Salad'
    },
    {
        id: '25b24f66-4091-441d-bff8-9e832a0ac348',
        name: 'Lobster Bisque'
    }
]

const PopularSearchSlice = createSlice({
    name: 'popularsearchslice',
    initialState: initialState,
    reducers: {
        addPopularSearch: (state, action: PayloadAction<foodDetail>) => {
            state.push(action.payload)
        }
    }
})

export const { addPopularSearch } = PopularSearchSlice.actions

export default PopularSearchSlice.reducer