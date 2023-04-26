/// <reference types="cypress" />

describe("Main page test", () => {
  it("does correct search", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("search for Lord of the Rings characters");
    cy.get(".search-bar").type("Frodo");
    cy.get(".search-bar").type("{enter}");
    cy.contains("Hobbit");
    cy.get(".card").first().click();
    cy.contains("Gender");

    cy.get(".modal-close").click();
    cy.contains("Gender").should("not.exist");
  });
});
