import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import newsService from "./news.service";
import { persistReducer } from "redux-persist";
import settings from "./settings";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  [settings.name]: settings.reducer,
  [newsService.reducerPath]: newsService.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: [newsService.reducerPath],
  },
  reducers
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
