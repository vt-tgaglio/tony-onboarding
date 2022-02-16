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
} from "../../config";

const App = () => {
  const [file, setFile] = useState(initialFileValue);
  const [isScanning, setIsScanning] = useState(initialIsScanning);
  const [isDone, setIsDone] = useState(initialIsDone);
  const [object, setObject] = useState(initialObjectDetected);
  const [engine, setEngine] = useState(initialEngine);
  const [isAiwareAuthed, setIsAiwareAuthed] = useState(null);

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
      const { status } = window.aiware.store.getState().auth;
      if (status === "failure") {
        console.warn(warningMsg);
        setIsAiwareAuthed(false);
      } else if (status === "success") {
        console.log(`
        tony-onboarding:
        
        User authenticated successfully with aiware auth token.
        `);
        setIsAiwareAuthed(true);
      } else {
        console.warn(warningMsg);
        setIsAiwareAuthed(false);
      }
    }, 500);
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
