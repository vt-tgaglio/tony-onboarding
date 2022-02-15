import React, { useEffect, useState } from "react";
import Container from "./components/Containers/Container";
import {
  token,
  enableAutoUploadClicks,
  initialIsScanning,
  initialIsDone,
  initialFileValue,
  initialObjectDetected,
  initialEngine,
  VERITONE_ENVIRONMENT_GQL_URL,
} from "./config";

const App = () => {
  const [file, setFile] = useState(initialFileValue);
  const [isScanning, setIsScanning] = useState(initialIsScanning);
  const [isDone, setIsDone] = useState(initialIsDone);
  const [object, setObject] = useState(initialObjectDetected);
  const [engine, setEngine] = useState(initialEngine);

  const handleScanImage = () => {
    console.log("Image is currently scanning...");
    setIsScanning(true);
  };
  const handleIsDoneScanning = () => {
    console.log("Image is finished scanning! Results displaying now.");
    setIsDone(true);
  };
  const handleEngineChange = (engine) => {
    console.log("Select engine clicked: ", engine);
    if (engine !== "transcribe" && engine !== "recognition") return;
    console.log(`Engine changed to ${engine}`);
    setEngine(engine);
  };

  useEffect(() => {
    window.aiware.init(
      {
        baseUrl: VERITONE_ENVIRONMENT_GQL_URL,
        applicationId: "app-123",
        withAuth: true,
        authToken: token, // Get this from `/v1/admin/current-user`
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
    <Container
      className="app-container"
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
  );
};

export default App;
