import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Header } from "../src/components/Header";
import { SearchBar } from "../src/components/SearchBar";
import { Card } from "../src/components/CardComponent";
import { Cards } from "../src/components/Cards";
import { Modal } from "../src/components/Modal";

describe("Header", () => {
  test("Should render header", () => {
    const wrapper = render(<Header label="About" />);

    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector(".page-title");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent(/About/);

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
    const wrapper = render(
      <SearchBar setSearch={() => {}} setIsLoading={() => {}} />
    );

    expect(wrapper).toBeTruthy();

    const input = wrapper.container.querySelector(
      ".search-bar"
    ) as HTMLInputElement | null;
    expect(input).toBeTruthy();

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
        CardDate={"25.03.2023"}
        CardAvailable={true}
        CardCountry={"Brasil"}
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
    const wrapper = render(
      <Cards
        input={"Frodo"}
        setIsLoading={() => {}}
        setErrorMessage={() => {}}
      />
    );

    expect(wrapper).toBeTruthy();

    const container = wrapper.container.querySelector(".cards-container");
    expect(container).toBeTruthy();
  });
});

describe("Modal", () => {
  test("Should render modal", () => {
    const wrapper = render(
      <Modal title={"Frodo"} onClose={() => {}}>
        <div className="card card-modal">
          <div
            className="card-img"
            style={{
              backgroundImage: `url("./src/assets/lor.jpg")`,
            }}
          />
          <p>{"Hobbit"}</p>
          <div className="card-additional-info">
            <p className="card-date">Gender: {"Male"}</p>
            <p className="card-available">Spouse: {""}</p>
            <p className="country">Birth: {"some date"}</p>
          </div>
        </div>
      </Modal>
    );

    expect(wrapper).toBeTruthy();

    const container = wrapper.container.querySelector(".card-modal");
    expect(container).toBeTruthy();
  });
});
