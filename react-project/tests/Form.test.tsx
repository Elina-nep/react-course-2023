import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { Form } from "../src/pages/Form";
import { ErrorMessage } from "../src/components/ErrorMessage";

describe("Form", () => {
  test("Should render Form", () => {
    const wrapper = render(<Form />);

    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector(".form");
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent("Add your card information");
  });
});

describe("Error", () => {
  test("Should Error message", () => {
    const wrapper = render(<ErrorMessage text={"title"} />);

    expect(wrapper).toBeTruthy();

    const message = wrapper.container.querySelector(".error-message");
    expect(message).toBeTruthy();
    expect(message).toHaveTextContent("Not valid title");
  });
});
