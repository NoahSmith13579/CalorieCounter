import React, { useEffect } from "react";
import SearchBox from "../../src/Components/SearchBox/SearchBox";
import data from "../fixtures/data.json";
import useLocalStorage from "../../src/Handlers/LocalStorageHandler";

//This is tested in E2E
describe("SearchBox", () => {
  beforeEach(() => {
    window.localStorage.setItem("food", JSON.stringify(data.items));
  });

  it("renders", () => {
    cy.mount(<SearchBox onClick={setLocalStorage} />);
  });

  it("changes localStorage on input confirm", () => {
    cy.mount(<SearchBox onClick={setLocalStorage} />);
    const input = cy.get("[data.cy=searchBoxInput]");
    input.type("tomato");
  });
});
