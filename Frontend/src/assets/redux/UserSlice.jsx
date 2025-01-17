import { combineReducers } from "redux";
import UserSlice from "./UserSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist"; 
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth: UserSlice
})

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(Store)
export default Store