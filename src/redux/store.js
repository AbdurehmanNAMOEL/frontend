import { configureStore } from "@reduxjs/toolkit"
import {userReducer} from '../redux/features/authSlice'
import { stoneReducer } from "./features/gemstoneSlice"
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage"
import { getDefaultMiddleware } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'rootStore',
  storage,
}

const reducer =combineReducers({
 stone:stoneReducer,
 auth:userReducer
})
const persistedReducer = persistReducer(persistConfig,reducer);
const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools:false   
})

export default store