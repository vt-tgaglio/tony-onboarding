import React, { useEffect, useState } from "react";
import Container from "./Container";
import NoAuthenticationError from "../Feedback/NoAuthenticationError";
import {
  token,
  enableAutoUploadClicks,
  initialIsScanning,
  initialIsDone,
  initialFileValue,
  initialObjectDetected,
  initialEngine,
  VERITONE_ENVIRONMENT_GQL_URL,
  testModeFile,
  testModeImageFile,
  testModeAudioFile,
} from "../../config";

const App = () => {
  const [file, setFile] = useState(initialFileValue);
  const [isScanning, setIsScanning] = useState(initialIsScanning);
  const [isDone, setIsDone] = useState(initialIsDone);
  const [object, setObject] = useState(initialObjectDetected);
  const [engine, setEngine] = useState(initialEngine);
  const [isAiwareAuthed, setIsAiwareAuthed] = useState(null);
  const [isTestMode, setIsTestMode] = useState(false);

  const handleScanImage = () => {
    setIsScanning(true);
  };
  const handleIsDoneScanning = () => {
    setIsDone(true);
  };
  const handleEngineChange = (engine) => {
    if (engine !== "transcribe" && engine !== "recognition") return;
    setEngine(engine);
  };
  const checkUserAuthStatus = () => {
    const warningMsg = `
    tony-onboarding:

    Unable to successfully authenticate with aiware sdk.
    Please verify in '/src/token.js' that a valid session id
    is included as the 'token' export string.
    `;
    setTimeout(() => {
      if (checkTestNoAuthError()) return;
      checkTestMode();

      const { status } = window.aiware.store.getState().auth;
      if (status === "failure") {
        console.warn(warningMsg);
        setIsAiwareAuthed(false);
      } else if (status === "success") {
        console.log(`
        tony-onboarding:
        
        ✅ User authenticated successfully with aiware auth token
        `);
        setIsAiwareAuthed(true);
      } else {
        console.warn(warningMsg);
        setIsAiwareAuthed(false);
      }
    }, 500);
  };
  const checkTestNoAuthError = () => {
    const { hash } = new URL(window.location.href);
    if (hash === "#test-no-auth-error") {
      console.warn(`
      tony-onboarding:

      ❗️ NoAuthenticationError is being tested.
      ❗️ aiWARE Session failure notice should appear.
      `);
      setIsAiwareAuthed(false);
      return true;
    }
    return false;
  };
  const checkTestMode = () => {
    const { hash } = new URL(window.location.href);
    if (hash === "#test-mode") {
      console.warn(`
      tony-onboarding:

      ❗️ Cypress Test Mode is enabled.
      ❗️ Real API calls are not sent..
      `);
      setIsTestMode(true);
      return true;
    }
    return false;
  };
  const setTestFile = () => {
    const msg = `
    tony-onboarding:
    ❗️ Engine: ${engine.toUpperCase()}
    ❗️ Test mode: Test file has been set..
    `;
    switch (engine) {
      case "recognition":
        setFile(testModeImageFile);
        console.warn(msg + `\n IMAGE file set.`);
        break;
      case "transcribe":
        setFile(testModeAudioFile);
        console.warn(msg + `\n AUDIO file set.`);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    window.aiware.init(
      {
        baseUrl: VERITONE_ENVIRONMENT_GQL_URL,
        applicationId: "app-123",
        withAuth: true,
        authToken: token,
      },
      function () {
        window.aiware.mountWidget({
          name: "APP_BAR",
          elementId: "app-bar",
          config: {
            title: "Tony Onboarding",
            backgroundColor: "#1f2937",
          },
        });
        // Check auth status
        checkUserAuthStatus();

        window.aiware.on("fileUpload", function (error, file) {
          if (error) {
            alert("Error during the file upload!");
            throw error;
          }

          console.log(file);
          setTimeout(() => {
            if (engine === "transcribe") {
              console.log("Transcribe Engine Selected. Audio file uploaded");
            }
            setFile(file);
            console.log("Closing Importer panel");
            if (enableAutoUploadClicks) {
              document
                .querySelector(`[data-test="data-center-importer-close-panel"]`)
                .click();
            }
          }, 500);
        });
        window.aiware.on("fileUploadProgress", function (error, file) {
          if (error) {
            alert("Error during the file upload!");
            throw error;
          }
          console.log("Progress: ", file);
        });
      }
    );
  }, []);

  return (
    <>
      {isAiwareAuthed === true ? (
        <Container
          isTestMode={isTestMode}
          setTestFile={setTestFile}
          file={file}
          onScanImage={handleScanImage}
          isScanning={isScanning}
          isDone={isDone}
          onDoneScanning={handleIsDoneScanning}
          object={object}
          setObject={setObject}
          engine={engine}
          onEngineChange={handleEngineChange}
        />
      ) : null}
      {isAiwareAuthed === false ? <NoAuthenticationError /> : null}
    </>
  );
};

export default App;
