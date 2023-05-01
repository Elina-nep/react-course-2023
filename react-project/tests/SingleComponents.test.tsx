import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SearchBar } from "../src/components/SearchBar";
import { Card } from "../src/components/CardComponent";
import { Modal } from "../src/components/Modal";
import { renderWithProviders } from "./helper-test";
import { ApiCard } from "../src/components/ApiCard";

describe("Search bar", () => {
  test("Should render input", async () => {
    const wrapper = renderWithProviders(<SearchBar />);
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
      fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
      expect(input.value).toBe("additional test");
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

describe("Card", () => {
  test("Should render one card", () => {
    const wrapper = renderWithProviders(
      <ApiCard
        name={"Frodo"}
        spouse={""}
        race={"Hobbit"}
        gender={"Male"}
        wikiUrl={""}
        birth={"some date"}
      />
    );
    expect(wrapper).toBeTruthy();

    const card = wrapper.container.querySelector(".card");
    expect(card).toBeTruthy();

    fireEvent(
      card!,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const modal = wrapper.container.querySelector(".modal-container");
    expect(modal).toBeTruthy();
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
