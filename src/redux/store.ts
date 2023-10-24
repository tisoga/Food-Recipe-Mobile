import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import favoriteFoodReducer from './FavoriteFoodSlice';
import SearchHistoryReducer from './SearchHistorySlice'
import PopularHistoryReducer from './PopularSearchSlice'
import ThemeReducer from './ThemeSlice';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['FavoriteFood', 'Theme']
}

const reducer = combineReducers({
    Theme: ThemeReducer,
    FavoriteFood: favoriteFoodReducer,
    SearchHistory: SearchHistoryReducer,
    PopularHistory: PopularHistoryReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
})

export type RootState = ReturnType<typeof store.getState>

export default store