/// <reference types="cypress" />

describe("Form test", () => {
  it("Creates card after correct submit", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Add card").click();
    cy.url().should("include", "/Form");
    cy.get("#title").type("Title");
    cy.get("#description").type("Description");
    cy.get("#date").type("2023-04-20");
    cy.get("#submit").click();
    cy.contains("You should agree");
    cy.get("#country_input").type("USA");
    cy.get("#available").click();
    cy.get("#agree").click();
    cy.get("#image").selectFile("./src/assets/lor.jpg");
    cy.get("#submit").click();
    cy.contains("Title");
    cy.get(".card");
    cy.contains("Main page").click();
    cy.contains("Add card").click();
    cy.get(".card");
  });
});
