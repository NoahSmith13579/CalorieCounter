import useLocalStorage from "./LocalStorageHandler";
import { renderHook, act, cleanup } from "@testing-library/react";
import data from "../../cypress/fixtures/data.json";

beforeAll(() => {});

afterEach(() => {
  cleanup();
});

test("updates items", () => {
  const foodArray = [...data.items];
  const { result } = renderHook(() => useLocalStorage("food", foodArray));

  expect(result.current[0]).toBe(foodArray);
  act(() => {
    result.current[1]([]);
  });
  expect(result.current[0]).toStrictEqual([]);
  cleanup();
});
