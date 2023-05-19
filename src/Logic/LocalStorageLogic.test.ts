import {
  checkStorageForDupes,
  sumNutValues,
  convertToNutProgress,
} from "./LocalStorageLogic";
import dupeData from "../../cypress/fixtures/dupe.json";
import data from "../../cypress/fixtures/data.json";
import doubledData from "../../cypress/fixtures/doubledSSdata.json";
import nutValueSum from "../../cypress/fixtures/nutValueSum.json";
import dataProgressPercent from "../../cypress/fixtures/dataProgressPercent.json";

describe("performs all checks", () => {
  beforeEach(() => {});

  test("fixes data if multiples", () => {
    let dupeItems = [...dupeData.items];
    let fixedItems = checkStorageForDupes(dupeItems);
    let doubledDataItems = [...doubledData.items];

    expect(fixedItems).toStrictEqual(doubledDataItems);
  });
  test("sums store's values", () => {
    let items = data.items.map((a) => {
      return { ...a };
    });
    expect(items).not.toBe(nutValueSum);
    const sum = sumNutValues(items);
    expect(sum).toStrictEqual(nutValueSum);
  });
  test("gives percents from data", () => {
    let items = data.items.map((a) => {
      return { ...a };
    });
    const progessPercent = convertToNutProgress(items);
    expect(progessPercent).toStrictEqual(dataProgressPercent);
  });
  test("returns back the same data if no dupes", () => {
    let errorlessData = data.items.map((a) => {
      return { ...a };
    });
    const checkedData = checkStorageForDupes(errorlessData);
    expect(checkedData).toBe(errorlessData);
  });
});
