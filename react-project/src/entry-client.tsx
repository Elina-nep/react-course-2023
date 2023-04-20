import { hydrateRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store";
import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import { Form } from "./pages/Form";
import "./main.css";

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
