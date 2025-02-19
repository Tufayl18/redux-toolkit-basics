import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage" // Uses localStorage for persistence
import { combineReducers } from "redux"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  todo: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistReducer,
})

export const persistor = persistStore(store)
