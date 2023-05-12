import React from "react";
import ProgressBar from "../../src/Components/ProgressBar/ProgressBar";

describe("<ProgressBar/>", () => {
  it("renders", () => {
    cy.mount(<ProgressBar progress={90} color="red" />);
  });
});
