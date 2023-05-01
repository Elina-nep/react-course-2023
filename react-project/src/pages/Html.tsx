import { PreloadedState, StateFromReducersMapObject } from "@reduxjs/toolkit";
import React, { ReactNode } from "react";
import { reducer } from "store/store";

type RootState = StateFromReducersMapObject<typeof reducer>;

export const Html = ({
  children,
  preloadedState,
}: {
  children: ReactNode;
  preloadedState: PreloadedState<RootState>;
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>

      <body>
        <div id="root">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ =
            ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}`,
          }}
        ></script>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
            import RefreshRuntime from "http://localhost:3001/@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window) 
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true`,
          }}
        />

        <script type="module" src="http://localhost:3001/@vite/client"></script>
        <script type="module" src="http://localhost:3001/main.js"></script>
      </body>
    </html>
  );
};
