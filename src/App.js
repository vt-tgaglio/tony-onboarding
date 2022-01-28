import React, { useEffect, useState } from "react";
import Container from "./components/Container";

const App = () => {
  const [file, setFile] = useState({ url: "testurl" });

  useEffect(() => {
    window.aiware.init(
      {
        baseUrl: "https://api.stage.us-1.veritone.com/v3/graphql",
        applicationId: "app-123",
        withAuth: true,
        authToken: "36f75003-8d00-4a3e-a496-6c301dacebc7", // Get this from `/v1/admin/current-user`
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
    <div>
      <Container file={file} />
    </div>
  );
};

export default App;
