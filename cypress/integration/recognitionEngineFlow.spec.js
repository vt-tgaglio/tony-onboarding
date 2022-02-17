describe("recognition engine", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#test-mode");
    cy.wait(2000);
  });

  it("can be selected", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(`[data-test-id="recognition-engine-container"]`).should("exist");
  });

  it("image filename displays on upload", () => {
    const filename = "playstation2.jpg";
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(
      `[data-test-id="recognition-engine-container"] [role="button"]`
    ).click();
    cy.get(
      `[data-test-id="upload-image-panel"] [data-test-id="action-panel-description"]`
    ).should("have.text", filename);
  });
  it("scanning progress bar displays", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(
      `[data-test-id="recognition-engine-container"] [role="button"]`
    ).click();
    cy.get(`[data-test-id="scan-image-panel"] button`).click();
    cy.get(`[data-test-id="scanning-panel"]`).should("exist");
  });
  it("scanner displays correct result when finished", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(
      `[data-test-id="recognition-engine-container"] [role="button"]`
    ).click();
    cy.get(`[data-test-id="scan-image-panel"] button`).click();
    cy.wait(1000 * 24);
    cy.get(`[data-test-id="scanner-result-object"]`).should("exist");
  });
  it("floating ufos display", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(
      `[data-test-id="recognition-engine-container"] [role="button"]`
    ).click();
    cy.get(`[data-test-id="scan-image-panel"] button`).click();
    cy.wait(1000 * 24);
    cy.get(`[data-test-id="floating-ufo"]`).should("exist");
  });
  it("floating console display", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(
      `[data-test-id="recognition-engine-container"] [role="button"]`
    ).click();
    cy.get(`[data-test-id="scan-image-panel"] button`).click();
    cy.wait(1000 * 24);
    cy.get(`[data-test-id="floating-playstation"]`).should("exist");
  });
});
