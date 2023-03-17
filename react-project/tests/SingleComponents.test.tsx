import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Header } from "../src/components/Header";
import { SearchBar } from "../src/components/SearchBar";
import { Card } from "../src/components/CardComponent";
import { Cards } from "../src/components/Cards";

describe("Header", () => {
  test("Should render header", () => {
    const wrapper = render(<Header label="about" />);

    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector(".page-title");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent(/About us/);

    const nav = wrapper.container.querySelector(".header__nav");
    expect(nav).toBeTruthy();
    expect(screen.getAllByRole("link")).toBeTruthy();
  });

  test("Header has proper title", () => {
    const wrapper = render(<Header label="/" />);

    const title = wrapper.container.querySelector(".page-title");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent(/Main page/);
  });
});

describe("Search bar", () => {
  test("Should render input", () => {
    localStorage.setItem("input", "test");
    const wrapper = render(<SearchBar />);

    expect(wrapper).toBeTruthy();

    const input = wrapper.container.querySelector(
      ".search-bar"
    ) as HTMLInputElement | null;
    expect(input).toBeTruthy();
    expect(input).toHaveValue("test");

    if (input) {
      input.textContent = "another test";
      expect(input.textContent).toBe("another test");

      expect(input.type).toBe("text");

      fireEvent.change(input, {
        target: {
          value: "additional test",
        },
      });
      expect(input.value).toBe("additional test");

      expect(localStorage.getItem("input")).toBe("additional test");
    }
  });
});

describe("Card", () => {
  test("Should render card", () => {
    const wrapper = render(
      <Card
        CardTitle={"Card"}
        CardDescription={"Description"}
        CardBackgroundUrl={"some.url"}
      />
    );

    expect(wrapper).toBeTruthy();

    expect(screen.getByText("Card")).toBeTruthy();
    expect(screen.getByText("Description")).toBeTruthy();

    const img = wrapper.container.querySelector(".card-img");
    expect(img).toBeTruthy();
  });
});

describe("Card list", () => {
  test("Should render card list", () => {
    const wrapper = render(<Cards />);

    expect(wrapper).toBeTruthy();

    const container = wrapper.container.querySelector(".cards-container");
    expect(container).toBeTruthy();
  });
});
