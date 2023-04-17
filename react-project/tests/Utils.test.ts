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

  const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  const file2 = new File(["this is test file"], "test.txt", {
    type: "text/plain",
  });

  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("name", "file-upload");
  input.multiple = true;

  const mockFileList: FileList = Object.create(input.files);
  mockFileList[0] = file;
  mockFileList[1] = file2;
  Object.defineProperty(mockFileList, "length", { value: 2 });

  const newCard = composeNewCard({
    title: "title",
    description: "description",
    date: "25/02/22",
    country: "USA",
    image: "../assets/img.png",
    available: true,
    agree: "on",
  });

  expect(newCard).toBeTruthy();
  expect(newCard.available).toBeTruthy();
});
