import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout label={window.location.href} />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
