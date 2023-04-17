import React from "react";
import { describe, test, expect } from "vitest";
import { Cards } from "../src/components/Cards";
import { renderWithProviders } from "./helper-test";
import { waitFor } from "@testing-library/react";
import { fetch, Headers, Request, Response } from "cross-fetch";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

describe("Card list", () => {
  test("Should render card list", async () => {
    const wrapper = renderWithProviders(<Cards />);
    expect(wrapper).toBeTruthy();
    const loader = wrapper.container.querySelector(".spinner-container");
    expect(loader).toBeTruthy();

    await waitFor(async () => {
      const error = await wrapper.container.querySelector(".error-message");
      expect(error).toBeTruthy();
    });

    // await waitFor(async () => {
    //   const card = await wrapper.container.querySelector(".card");
    //   expect(card).toBeTruthy();
    // });
    // const card = wrapper.container.querySelector(".card");
    // expect(card).toBeTruthy();
  });
});
