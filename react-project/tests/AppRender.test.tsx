import { test, expect } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { routerObj } from "../src/router/RouterConfig";
import { renderWithProviders } from "./helper-test";

test("routing to the Main page", () => {
  const memoRoute = createMemoryRouter(routerObj, {
    initialEntries: ["/"],
  });
  renderWithProviders(<RouterProvider router={memoRoute} />);

  expect(screen.getByRole("textbox")).toBeTruthy();
});

test("routing to the About page", () => {
  const memoRoute = createMemoryRouter(routerObj, {
    initialEntries: ["/about"],
  });
  renderWithProviders(<RouterProvider router={memoRoute} />);

  expect(screen.getByText("Some information about us")).toBeTruthy();
});

test("routing to the random page", () => {
  const memoRoute = createMemoryRouter(routerObj, {
    initialEntries: ["/random_page"],
  });
  renderWithProviders(<RouterProvider router={memoRoute} />);

  expect(screen.getByText("404")).toBeTruthy();
});

// describe("Header", () => {
//   test("Should render header", () => {
//     const wrapper = render(<Header label="About" />);
//     expect(wrapper).toBeTruthy();

//     const title = wrapper.container.querySelector(".page-title");
//     expect(title).toBeTruthy();

//     const nav = wrapper.container.querySelector(".header__nav");
//     expect(nav).toBeTruthy();
//     expect(screen.getAllByRole("link")).toBeTruthy();
//   });

//   test("Header has proper title", () => {
//     const wrapper = render(<Header label="/" />);

//     const title = wrapper.container.querySelector(".page-title");
//     expect(title).toBeTruthy();
//   });
// });
