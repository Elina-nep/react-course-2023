import React from "react";
import { describe, test, expect, vi } from "vitest";
import { Cards } from "../src/components/Cards";
import { renderWithProviders } from "./helper-test";

global.fetch = vi.fn();

function createFetchResponse(data) {
  return {
    json: () =>
      new Promise((resolve) => {
        console.log("promice");
        resolve(data);
      }),
  };
}

describe("Card list", () => {
  test("Should render card list", () => {
    const todoListResponse = [
      {
        data: {
          docs: [],
        },
      },
    ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (fetch as any).mockResolvedValue(createFetchResponse(todoListResponse));

    const wrapper = renderWithProviders(<Cards />);
    expect(wrapper).toBeTruthy();
    const loader = wrapper.container.querySelector(".spinner-container");
    expect(loader).toBeTruthy();
    // const card = wrapper.container.querySelector(".card");
    // expect(card).toBeTruthy();
  });
});
