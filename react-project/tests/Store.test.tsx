import { store } from "../src/store/store";
import { describe, test, expect } from "vitest";

describe("Redux state tests", () => {
  test("Should initially set form cards to an empty array", () => {
    const state = store.getState().formCard;
    expect(state.formCard).toEqual([]);
  });
  test("Should initially set search to an empty str", () => {
    const state = store.getState().search;
    expect(state.search).toEqual("");
  });
});
