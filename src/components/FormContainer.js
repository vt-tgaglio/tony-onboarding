import React, { useState } from "react";
import ActionPanel from "./ActionPanel";
import ScanButton from "./ScanButton";
import UploadButton from "./UploadButton";

const FormContainer = (props) => {
  const formContainerStyles = {
    width: "900px",
    height: "400px",
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    border: "1px solid #f7f7f7",
    borderRadius: "3px",
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  };

  return (
    <>
      <header
        style={{ padding: "15px", fontWeight: "bold", fontStyle: "italic" }}
      >
        Xbox Detector App
      </header>
      <div style={formContainerStyles}>
        <ActionPanel
          isEnabled={true}
          image={props.file.getUrl ? props.file.getUrl : "./add-image.png"}
          description={
            props.file.getUrl
              ? "Let's test if this is an Xbox!"
              : "Upload an image to compare with an Aiware Engine."
          }
        >
          <UploadButton
            labelText={props.file.getUrl ? "Change Image" : "Upload Image"}
          />
        </ActionPanel>
        <ActionPanel
          isEnabled={props.file.getUrl}
          image="./palm-scan.png"
          description="Run a Cognitive engine against the image"
        >
          <ScanButton isEnabled={!!props.file.getUrl} />
        </ActionPanel>
        {}
      </div>
    </>
  );
};

export default FormContainer;
