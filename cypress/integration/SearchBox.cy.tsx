import SearchBox from "../../src/Components/SearchBox/SearchBox";
import data from "../fixtures/data.json";
describe("SearchBox", () => {
  const currentMeal = data.items.map((a) => {
    return { ...a };
  });

  it("renders", () => {
    cy.mount(<SearchBox />);
  });

  it("invokes function on submit", () => {
    const callback = cy.stub();
    cy.mount(<SearchBox />);
    const button = cy.get("[data-cy=searchBoxButton]");
    button.click().then(() => {
      expect(callback).to.have.been.calledOnce();
      expect(callback).to.have.been.calledWithExactly();
    });
  });

  it("changes localStorage on input", () => {
    cy.mount(<SearchBox />);
  });
});
