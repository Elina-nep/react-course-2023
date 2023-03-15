import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
