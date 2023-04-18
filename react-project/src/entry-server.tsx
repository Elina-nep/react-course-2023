import ReactDOMServer, {
  PipeableStream,
  renderToPipeableStream,
} from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React, { ReactNode } from "react";
import { Location, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { NotFound } from "./pages/404";
import { AboutUs } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./pages/Layout";
import { Form } from "./pages/Form";
import { store } from "./store/store";
import "./main.css";

export function render(
  url: string,
  opts: ReactDOMServer.RenderToPipeableStreamOptions | undefined
) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout label={"Page"} />}>
            <Route index element={<MainPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </StaticRouter>,
    opts
  );
  return stream;
}
