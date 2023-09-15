import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import productSlice from './Features/productSlice'
import authSlice from "./Features/authSlice";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    products: productSlice,
    auth: authSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;