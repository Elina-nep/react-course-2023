import ReactDOMServer, { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import { Form } from "./pages/Form";
import { store } from "./store/store";
import "./main.css";
import { Html } from "./pages/Html";
import { LORApi } from "./utils/createApi";

export async function render(
  url: string,
  opts: ReactDOMServer.RenderToPipeableStreamOptions | undefined
) {
  const preloadedState = store.getState();

  store.dispatch(LORApi.endpoints.getCharacters.initiate(""));
  await Promise.all(store.dispatch(LORApi.util.getRunningQueriesThunk()));

  const stream = renderToPipeableStream(
    <Html preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Layout label={"Page"} />}>
              <Route index element={<MainPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/form" element={<Form />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </Provider>
    </Html>,
    opts
  );

  return stream;
}
