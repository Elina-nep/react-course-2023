import { hydrateRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import { Form } from "./pages/Form";
import "./main.css";
import {
  PreloadedState,
  StateFromReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { reducer } from "./store/store";
import { LORApi } from "./utils/fetchData";

type RootState = StateFromReducersMapObject<typeof reducer>;

declare global {
  interface Window {
    __PRELOADED_STATE__: PreloadedState<RootState> | undefined;
  }
}
const store = configureStore({
  preloadedState: window.__PRELOADED_STATE__,
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LORApi.middleware),
});

delete window.__PRELOADED_STATE__;
hydrateRoot(
  document.getElementById("root")!,
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout label={"Page"} />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
