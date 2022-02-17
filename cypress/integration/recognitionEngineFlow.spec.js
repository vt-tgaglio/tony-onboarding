describe("recognition engine", () => {
  it("can be selected", () => {});

  it("can add a file to upload image", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".css-1yo1jo6-MuiStack-root > .MuiButton-root").click();
    cy.get("label > .MuiButton-root").click();
    cy.get("[data-test=data-center-importer-local-upload-file-input]").type(
      "C:\fakepathplaystationgame2.jpg"
    );
  });
});
