describe("transcription engine", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#test-mode");
    cy.wait(2000);
  });
  it("can be selected", () => {
    cy.get(`[data-test-id="engine-panel-transcribe"] button`).click();
    cy.get(`[data-test-id="transcribe-container"]`).should("exist");
  });
  it("audio filename displays on upload", () => {
    const filename = "test-ps-2.m4a";
    cy.get(`[data-test-id="engine-panel-transcribe"] button`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [role="button"]`).click();
    cy.get(
      `[data-test-id="upload-audio-panel"] [data-test-id="action-panel-description"]`
    ).should("have.text", filename);
  });
  it("transcription loader displays while querying", () => {
    cy.get(`[data-test-id="engine-panel-transcribe"] button`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [role="button"]`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [type="button"]`).click();
    cy.get(`[data-test-id="transcript-loader"]`).should("exist");
  });

  it("transcription displays correct result when finished", () => {
    const text = "XBOX";
    cy.get(`[data-test-id="engine-panel-transcribe"] button`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [role="button"]`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [type="button"]`).click();
    cy.wait(4000);
    cy.get(`[data-test-id="transcribe-found-object"]`).should(
      "have.text",
      text
    );
  });

  it("floating ufos display", () => {
    cy.get(`[data-test-id="engine-panel-transcribe"] button`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [role="button"]`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [type="button"]`).click();
    cy.wait(4000);
    cy.get(`[data-test-id="floating-ufo"]`).should("exist");
  });
  it("floating xbox displays", () => {
    cy.get(`[data-test-id="engine-panel-transcribe"] button`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [role="button"]`).click();
    cy.get(`[data-test-id="upload-audio-panel"] [type="button"]`).click();
    cy.wait(4000);
    cy.get(`[data-test-id="floating-xbox"]`).should("exist");
  });
});
