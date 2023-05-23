import data from "../fixtures/data.json";

describe("Homepage", () => {
  beforeEach(() => {});
  it("should visit", () => {
    cy.visit("/");
  });
  it("can add items", () => {
    cy.visit("/");
    window.localStorage.setItem("food", JSON.stringify(data.items));
    let input = cy.get("[data-cy=searchBoxInput]");
    input.type("chicken");
    let button = cy.get("[data-cy=searchBoxButton]");
    button.click();
    cy.findByText("Chicken", { timeout: 3000 }).should("exist");
  });
  it("can remove items", () => {
    cy.visit("/");
    window.localStorage.setItem("food", JSON.stringify(data.items));
    cy.findByText("Remove pear?").click();
    cy.findByText("pear", { timeout: 1000 }).should("not.exist");
  });
  it("removes the last item without error", () => {
    cy.visit("/");
    window.localStorage.setItem("food", JSON.stringify(data.items));
    cy.findByText("Remove pear?").click();
    cy.findByText("Remove tomato?").click();
    cy.findByText("Remove onion?").click();
    cy.findByText("onion", { timeout: 1000 }).should("not.exist");
    cy.get(`[style*="width: 2.24%"]`).should("not.exist");
  });
});
