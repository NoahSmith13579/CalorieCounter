import React from "react";
import NutritionCard from "../../src/Components/NutritionCard/NutritionCard";
import data from "../fixtures/data.json";
import { capitalizeFirstLetter } from "../../src/Util/Util";

describe("<NutritionCard/>", () => {
  console.log("Mock data: ", data);
  const testItem = data.items[0];
  it("renders", () => {
    cy.mount(<NutritionCard nutritionFacts={testItem} />);
  });
  it("has all the data listed", () => {
    cy.mount(<NutritionCard nutritionFacts={testItem} />);
    cy.get("[data-cy=name]").should(
      "have.text",
      `${capitalizeFirstLetter(testItem.name)}`
    );
    cy.get("[data-cy=serving_size_g]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.serving_size_g);
  });
});
