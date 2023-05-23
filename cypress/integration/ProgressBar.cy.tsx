import React from "react";
import ProgressBar from "../../src/Components/ProgressBar/ProgressBar";

describe("<ProgressBar/>", () => {
  it("renders", () => {
    cy.mount(<ProgressBar progress={90} color="red" />);
  });
  it("displays correct color", () => {
    cy.mount(<ProgressBar progress={90} color="red" />);
    cy.get("[data-cy='progress-filler']").should(
      "have.css",
      "backgroundColor",
      "rgb(255, 0, 0)"
    );
  });
  it("displays correct width", () => {
    cy.mount(<ProgressBar progress={90} color="red" />);
    cy.get("[data-cy='progress-filler']").should("have.css", "width", "450px");
  });
});
