import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import searchReducer from "../src/store/sliceSearch";
import formCardReducer from "../src/store/sliceFormCard";
import { IRootState } from "../src/interfaces/store";
import { LORApi } from "../src/utils/fetchData";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<IRootState>;
  store?: ToolkitStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      search: {
        search: "",
      },
      formCard: {
        formCard: [
          {
            title: "",
            description: "",
            date: "",
            country: "",
            image: "",
            available: true,
          },
        ],
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        search: searchReducer,
        [LORApi.reducerPath]: LORApi.reducer,
        formCard: formCardReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(LORApi.middleware),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
