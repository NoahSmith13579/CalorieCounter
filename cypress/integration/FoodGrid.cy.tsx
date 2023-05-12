import React from "react";
import FoodGrid from "../../src/Components/FoodGrid/FoodGrid";
import data from "../fixtures/data.json";

describe("<FoodGrid/>", () => {
  const meal = data.items;

  it("renders", () => {
    cy.mount(<FoodGrid meal={meal} />);
  });
});
