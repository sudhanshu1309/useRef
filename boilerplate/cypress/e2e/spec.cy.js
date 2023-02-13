describe("Checking useRef Hook", () => {
  it("return 0 render on click", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();
    cy.get("button").click();
    cy.get("button").click();
    cy.get("button").click();

    cy.get("p").should("have.text", "4");
  });
});
