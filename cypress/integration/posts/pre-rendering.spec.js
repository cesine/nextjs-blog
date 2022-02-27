describe('posts pre-rendering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/posts/pre-rendering')
  })

  it("should render the post", () => {
    cy.get("h1").contains("Pre-rendering");
  });
})
