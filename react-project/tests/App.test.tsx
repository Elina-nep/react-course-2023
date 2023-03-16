import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainPage } from "../src/pages/MainPage";
import React from "react";

describe("MainPage", () => {
  test("Should render Main Page", () => {
    const wrapper = render(<MainPage />);

    expect(wrapper).toBeTruthy();

    const input = wrapper.container.querySelector("input");
    expect(input).toBeTruthy();

    // Get by text using the React testing library
    const cards = wrapper.container.querySelector(".cards-container");
    expect(cards).toBeTruthy();

    // check if App components renders headline
  });
});

// const router = createMemoryRouter(routesConfig, {
//     initialEntries: ["/"],
//   });
//   render(<RouterProvider router={router} />);
//   expect(screen.getByRole("searchbox")).toBeInTheDocument();

// describe("<App />", () => {
//   test("App mounts properly", () => {
//     const wrapper = render(<App />);
//     expect(wrapper).toBeTruthy();

//     // Get by h1
//     const h1 = wrapper.container.querySelector("h1");
//     expect(h1?.textContent).toBe("Vite + React");

//     // Get by text using the React testing library
//     const text = screen.getByText(
//       /Click on the Vite and React logos to learn more/i
//     );
//     expect(text.textContent).toBeTruthy();
//   });
// });
