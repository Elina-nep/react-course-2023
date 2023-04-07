import { imgValid, lengthValid } from "../src/utils/checkFormValid";
import { describe, test, expect } from "vitest";
import { composeNewCard } from "../src/utils/composeNewCard";

describe("Utils", () => {
  test("checking form", () => {
    const resultTrue = lengthValid("Card1");

    const resultFalse = imgValid(new FileList()) || lengthValid("     ");

    expect(resultTrue).toBeTruthy();
    expect(resultFalse).toBeFalsy();
  });

  test("compose card values", () => {
    const newCard = composeNewCard({
      title: "title",
      description: "description",
      date: "25/02/22",
      country: "USA",
      image: new FileList(),
      available: true,
      agree: "on",
    });

    expect(newCard).toBeTruthy();
    expect(newCard.available).toBeTruthy();
  });
});
