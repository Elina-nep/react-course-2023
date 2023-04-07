import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import { MainPage } from "../src/pages/MainPage";
import { NotFound } from "../src/pages/404";
import { AboutUs } from "../src/pages/About";
import { Layout } from "../src/pages/Layout";

describe("MainPage", () => {
  test("Should render Main Page", () => {
    const wrapper = render(<MainPage />);

    expect(wrapper).toBeTruthy();

    const input = wrapper.container.querySelector("input");
    expect(input).toBeTruthy();

    const cards = wrapper.container.querySelectorAll(".cards-container");
    expect(cards).toBeTruthy();
  });
});

describe("About", () => {
  test("Should render About Page", () => {
    const wrapper = render(<AboutUs />);

    expect(wrapper).toBeTruthy();

    expect(screen.getByText("Some information about us")).toBeTruthy();
  });
});

describe("404", () => {
  test("Should render 404 Page", () => {
    const wrapper = render(<NotFound />);

    expect(wrapper).toBeTruthy();

    expect(screen.getByText("404")).toBeTruthy();
    expect(screen.getByText("The page is not found")).toBeTruthy();
  });
});

describe("Layout", () => {
  test("Should render Layout", () => {
    const wrapper = render(<Layout label="/" />);

    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector(".page-title");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent(/Main page/);
  });
});
