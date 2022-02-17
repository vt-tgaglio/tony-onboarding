describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("opens the app", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("tony-onboarding display errors", () => {
  it("no authentication error shows up when triggered manually", () => {
    cy.visit("http://localhost:3000/#test-no-auth-error");
    cy.get(`[data-test-id="no-authentication-error"]`).should("exist");
  });
});
describe("aiware-sdk integration", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
  });
  it("utilities button opens veritone panel", () => {
    cy.get(`[data-test="app-bar-setting-button"]`).click();
    cy.get(`[data-test="panel-VERITONE_PANEL_ID"]`).should("exist");
  });

  it("app switcher button opens application panel", () => {
    cy.get(`[data-test="app-bar-switch-app-button"]`).click();
    cy.get(`[data-test="panel-APPLICATION_PANEL_ID"]`).should("exist");
  });

  it("transcription engine opens aiware importer panel", () => {
    cy.get(`.engine-panel-transcribe button`).click();
    cy.get(`[data-test-id="transcribe-container"]`).should("exist");
    cy.get(`[data-test-id="upload-audio-panel"] [role="button"]`).click();
    cy.get(`[data-test="panel-unknown"]`).should("exist");
  });

  it("recognition engine opens aiware importer panel", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(`[data-test-id="recognition-engine-container"]`).should("exist");
    cy.get(`[data-test-id="upload-image-panel"] [role="button"]`).click();
    cy.get(`[data-test="panel-unknown"]`).should("exist");
  });
});
describe("tony-onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
  });
  it("shows engine selector on authed load", () => {
    cy.get(`[data-test-id="engine-selector"]`).should("exist");
  });
  it("config panel opens", () => {
    cy.get(`[data-test-id="config-button"]`).click();
    cy.get(`[data-test-id="ui-modal-config-details-modal"]`).should("exist");
  });
  it("transcription engine opens", () => {
    cy.get(`.engine-panel-transcribe button`).click();
    cy.get(`[data-test-id="transcribe-container"]`).should("exist");
  });
  it("recognition engine opens", () => {
    cy.get(`.engine-panel-recognition button`).click();
    cy.get(`[data-test-id="recognition-engine-container"]`).should("exist");
  });
});
