import {
  checkStorageForDupes,
  updateServingSize,
  sumNutValues,
} from "./LocalStorageLogic";
import dupeData from "../../cypress/fixtures/dupe.json";
import data from "../../cypress/fixtures/data.json";
import doubledData from "../../cypress/fixtures/doubledSSdata.json";
import nutValueSum from "../../cypress/fixtures/nutValueSum.json";

describe("performs all checks", () => {
  beforeEach(() => {});

  test("fixes data if multiples", () => {
    let dupeItems = [...dupeData.items];
    let fixedItems = checkStorageForDupes(dupeItems);
    let doubledDataItems = [...doubledData.items];

    expect(fixedItems).toStrictEqual(doubledDataItems);
  });
  test("updates ServingSize as needed", () => {
    let items = data.items.map((a) => {
      return { ...a };
    });
    let doubledItems = [...doubledData.items];
    expect(items).not.toBe(doubledItems);
    const updatedItems = updateServingSize(items, "onion", 200);
    expect(updatedItems).toBe(items);
  });
  test("sums store's values", () => {
    let items = data.items.map((a) => {
      return { ...a };
    });
    expect(items).not.toBe(nutValueSum);
    const sum = sumNutValues(items);
    expect(sum).toStrictEqual(nutValueSum);
  });
  test("returns back the same data if no dupes", () => {
    let errorlessData = data;
    //FIXME const it and check that
    checkStorageForDupes(errorlessData.items);
    expect(errorlessData).toBe(data);
  });
});
