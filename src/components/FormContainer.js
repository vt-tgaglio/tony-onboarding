import React, { useState } from "react";
import ActionPanel from "./Panels/ActionPanel";
import Header from "./Decorations/Header";
import ScanButton from "./Buttons/ScanButton";
import UploadButton from "./Buttons/UploadButton";
import { formContainerStyles } from "../styles/containers";

const FormContainer = (props) => {
  return (
    <>
      <Header />
      <div
        className="animate__animated animate__fadeIn animate__delay1s"
        style={formContainerStyles}
      >
        <ActionPanel
          isEnabled={true}
          image={props.file.getUrl ? props.file.getUrl : "./add-image.png"}
          description={
            props.file.getUrl
              ? "Let's see what video game console this is!"
              : "Upload an image to the Game Console Detector."
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
          <ScanButton
            isEnabled={!!props.file.getUrl}
            onClick={props.onScanImage}
          />
        </ActionPanel>
      </div>
    </>
  );
};

export default FormContainer;
