import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./sliceSearch";
import formCardReducer from "./sliceFormCard";
import { LORApi } from "../utils/fetchData";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [LORApi.reducerPath]: LORApi.reducer,
    formCard: formCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LORApi.middleware),
});
