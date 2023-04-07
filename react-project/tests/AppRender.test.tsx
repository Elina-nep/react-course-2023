import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { routerObj } from "../src/router/RouterConfig";

test("routing to the Main page", () => {
  const memoRoute = createMemoryRouter(routerObj, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={memoRoute} />);

  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("routing to the About page", () => {
  const memoRoute = createMemoryRouter(routerObj, {
    initialEntries: ["/about"],
  });
  render(<RouterProvider router={memoRoute} />);

  expect(screen.getByText("Some information about us")).toBeInTheDocument();
});

test("routing to the random page", () => {
  const memoRoute = createMemoryRouter(routerObj, {
    initialEntries: ["/random_page"],
  });
  render(<RouterProvider router={memoRoute} />);

  expect(screen.getByText("404")).toBeInTheDocument();
});
