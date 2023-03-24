import { ICardValues } from "../src/pages/Form";
import { checkFormValid } from "../src/utils/checkFormValid";

test("checking form", () => {
  const values: ICardValues = {
    title: "Card1",
    description: "Some card description of card 1",
    image: "./src/assets/img.png",
    date: "22.12.2023",
    availableY: true,
    availableN: false,
    country: "USA",
    agree: "on",
  };

  const resultTrue = checkFormValid(values);
  const falsyValues = {
    title: "  ",
    description: "  ",
    image: "./src/assets/img.eps",
    date: "",
    availableY: false,
    availableN: false,
    country: "   ",
    agree: "",
  };
  const resultFalse = checkFormValid(falsyValues);

  expect(resultTrue.formValid).toBeTruthy();
  expect(resultFalse.formValid).toBeFalsy();
});
