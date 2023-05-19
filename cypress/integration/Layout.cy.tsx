import React, { useEffect, useState } from "react";
import Layout from "../../src/Components/Layout/Layout";
import data from "../fixtures/data.json";
import useLocalStorage from "../../src/Handlers/LocalStorageHandler";

describe("<Layout/>", () => {
  beforeEach(() => {
    window.localStorage.setItem("food", JSON.stringify(data.items));
  });
  it("renders", () => {
    cy.mount(<Layout />);
  });
});
