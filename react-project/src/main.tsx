import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerObj } from "./router/RouterConfig";
import { store } from "./store/store";
import "./main.css";

const router = createBrowserRouter(routerObj);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
