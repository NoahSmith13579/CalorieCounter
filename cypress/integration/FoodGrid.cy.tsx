import React from "react";
import FoodGrid from "../../src/Components/FoodGrid/FoodGrid";
import data from "../fixtures/data.json";
import NutritionFacts from "../../src/Entities/NutritionFacts";

describe("<FoodGrid/>", () => {
  const meal = data.items;
  const emptyMeal = [] as NutritionFacts[];

  it("renders", () => {
    const onClick = cy.stub();
    cy.mount(<FoodGrid meal={meal} onClick={onClick} />);
  });
  it("renders if 0 items given", () => {
    const onClick = cy.stub();
    cy.mount(<FoodGrid meal={emptyMeal} onClick={onClick} />);
    cy.get("[data-cy=emptyGrid").should("exist");
  });
});
