describe('posts ssg-ssr', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/posts/ssg-ssr')
  })

  it("should render the post", () => {
    cy.get("h1").contains("Server-side Rendering");
  });
})
