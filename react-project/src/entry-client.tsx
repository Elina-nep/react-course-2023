import { hydrateRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useRoutes,
} from "react-router-dom";
import { routerObj } from "./router/RouterConfig";
import { store } from "./store/store";
import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import { Form } from "./pages/Form";
import "./main.css";
// import "./pages/css/Form.css";
// import "./pages/css/Main.css";
// import "./components/css/CardComponent.css";
// import "./components/css/Cards.css";
// import "./components/css/ErrorMessage.css";
// import "./components/css/Header.css";
// import "./components/css/Modal.css";
// import "./components/css/SearchBar.css";
// import "./components/css/spinner.css";

// const router = createBrowserRouter(routerObj);

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
