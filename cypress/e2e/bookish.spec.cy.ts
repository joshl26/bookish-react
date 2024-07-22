import axios from "axios";
/* eslint-disable jest/valid-expect */
describe("Bookish application", function () {
  // beforeEach(() => console.log("connection setup"));

  // beforeEach(() => {
  //   cy.visit("http://localhost:8080/books");

  //   cy.request({
  //     method: "DELETE",
  //     url: "http://localhost:8080/books",
  //   });
  //   return axios.delete("http://localhost:8080/books?_cleanup=true");
  // });

  // beforeEach(() => {
  //   return axios.delete("http://localhost:8080/books?_cleanup=true");
  // });

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "http://localhost:8080/books?q=&_sort=id", [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven design", id: 2 },
      { name: "Building Microservices", id: 3 },
    ]);
    cy.intercept("GET", "http://localhost:8080/books/1", {
      name: "Refactoring",
      id: 1,
      description: "TESTING",
    });
  });

  it("Visits the bookish", function () {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });

  it("Goes to the detail page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });

  // it("Searches for a title", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.get("div.book-item").should("have.length", 4);
  //   cy.get('[data-test="search"] input').type("design");
  //   cy.get("div.book-item").should("have.length", 1);
  //   cy.get("div.book-item").eq(0).contains("Domain-driven design");
  // });
});
