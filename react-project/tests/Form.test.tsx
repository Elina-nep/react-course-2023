import { describe, test, expect } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { Form } from "../src/pages/Form";
import { ErrorMessage } from "../src/components/ErrorMessage";
import { renderWithProviders } from "./helper-test";

describe("Form", () => {
  const file = new File(["lor"], "../src/assets/lor.jpg", {
    type: "image/png",
  });

  test("Should render Form", async () => {
    const wrapper = renderWithProviders(<Form />);
    expect(wrapper).toBeTruthy();
    const title = wrapper.container.querySelector(".form");
    expect(title).toBeTruthy();
    const inputs = {
      title: wrapper.container.querySelector("#title"),
      description: wrapper.container.querySelector("#description"),
      date: wrapper.container.querySelector("#date"),
      image: wrapper.container.querySelector<HTMLInputElement>("#image"),
      available: wrapper.container.querySelector("#available"),
      agree: wrapper.container.querySelector("#agree"),
    };
    fireEvent.change(inputs.title!, {
      target: {
        value: "title",
      },
    });
    fireEvent.change(inputs.description!, {
      target: {
        value: "",
      },
    });

    fireEvent.change(inputs.date!, {
      target: {
        value: "22.04.2023",
      },
    });

    await waitFor(() =>
      fireEvent.change(inputs.image!, {
        target: { files: [file] },
      })
    );

    fireEvent.change(inputs.available!, {
      target: {
        value: true,
      },
    });

    fireEvent(
      inputs.agree!,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    fireEvent(
      wrapper.container.querySelector("#submit")!,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const cards = wrapper.container.querySelector(".card");
    expect(cards).toBeTruthy();
  });
});

describe("Error", () => {
  test("Should Error message", () => {
    const wrapper = render(<ErrorMessage message={"Not valid title"} />);
    expect(wrapper).toBeTruthy();
    const message = wrapper.container.querySelector(".error-message");
    expect(message).toBeTruthy();
  });
});
