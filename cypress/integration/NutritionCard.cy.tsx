import React from "react";
import NutritionCard from "../../src/Components/NutritionCard/NutritionCard";
import data from "../fixtures/data.json";

describe("<NutritionCard/>", () => {
  console.log("Mock data: ", data);
  const testItem = data.items[0];

  it("renders", () => {
    cy.mount(<NutritionCard nutritionFacts={testItem} />);
  });
  it("has all the data listed", () => {
    cy.mount(<NutritionCard nutritionFacts={testItem} />);
    cy.get("[data-cy=name]").should("have.text", `${testItem.name}`);

    cy.get("[data-cy=ss]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.serving_size_g);
    cy.get("[data-cy=c]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.calories);
    cy.get("[data-cy=ft]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.fat_total_g);
    cy.get("[data-cy=fs]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.fat_saturated_g);
    cy.get("[data-cy=ch]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.cholesterol_mg);
    cy.get("[data-cy=s]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.sodium_mg);
    cy.get("[data-cy=ct]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.carbohydrates_total_g);
    cy.get("[data-cy=f]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.fiber_g);
    cy.get("[data-cy=pr]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.protein_g);
    cy.get("[data-cy=p]")
      .invoke("text")
      .then(parseFloat)
      .should("equal", testItem.potassium_mg);
  });
  it("has input box for changing serving size", () => {
    cy.mount(<NutritionCard nutritionFacts={testItem} />);
    cy.get("input").should("exist");
  });
});
