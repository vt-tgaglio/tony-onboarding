import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import {
  token,
  enableAutoUploadClicks,
  initialIsScanning,
  initialIsDone,
  initialFileValue,
} from "./config";

const App = () => {
  const [file, setFile] = useState(initialFileValue);
  const [isScanning, setIsScanning] = useState(initialIsScanning);
  const [isDone, setIsDone] = useState(initialIsDone);

  const handleScanImage = () => {
    console.log("Image is currently scanning...");
    setIsScanning(true);
  };
  const handleIsDoneScanning = () => {
    console.log("Image is finished scanning! Results displaying now.");
    setIsDone(true);
  };
  useEffect(() => {
    window.aiware.init(
      {
        baseUrl: "https://api.stage.us-1.veritone.com/v3/graphql",
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
    />
  );
};

export default App;
