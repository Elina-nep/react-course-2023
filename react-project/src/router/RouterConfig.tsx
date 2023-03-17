import { NotFound } from "../pages/404";
import { AboutUs } from "../pages/About";
import { MainPage } from "../pages/MainPage";
import { Layout } from "../pages/Layout";
import React from "react";
import { createRoutesFromElements, Route } from "react-router-dom";

export const routerObj = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout label={window.location.href} />}>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>
);
