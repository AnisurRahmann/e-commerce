describe("Home Page", () => {
  before(() => {
    cy.visit("/");
  });

  it("Home should have header", () => {
    cy.get(".header");
  });

  it("Home page should have 8 product list", () => {
    cy.get(".product-list").find(".card-wrapper").should("have.length", 8);
  });

  it("Add to cart button should add the product to cart", () => {
    cy.addAllProductsToCart();
    cy.get(".cart-icon-badge").contains("8");
  });

  it("Click on cart icon should open the right bar", () => {
    cy.get(".cart-icon-badge").click({ multiple: true });
    cy.get(".cart-wrapper").should("be.visible");
  });

  it("Cart should have all products in the list", () => {
    cy.get(".cart-container")
      .find(".cart-item-wrapper")
      .should("have.length", 8);
  });

  it("Delete icon should delete item from the list", () => {
    cy.get(".cart-container")
      .find(".cart-item-wrapper")
      .then(() => {
        cy.get(".cart-action-area > .trash-icon > .button-ghost").should(
          ($el) => {
            expect(Cypress.dom.isDetached($el)).to.eq(false);
          }
        );
      });
  });
});
