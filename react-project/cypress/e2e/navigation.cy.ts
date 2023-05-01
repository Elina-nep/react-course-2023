/// <reference types="cypress" />

describe("Navigation test", () => {
  it("Go from page to page", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Add card").click();
    cy.url().should("include", "/Form");
    cy.contains("Main page").click();
    cy.contains("search for Lord of the Rings characters");
    cy.contains("About us").click();
    cy.contains("Some information about us");
    cy.visit("http://localhost:3001/unknown");
    cy.contains("The page is not found");
  });
});
