import React, { useState } from "react";
import ActionPanel from "./ActionPanel";
import Header from "./Decorations/Header";
import ScanButton from "./ScanButton";
import UploadButton from "./UploadButton";

const FormContainer = (props) => {
  const formContainerStyles = {
    width: "900px",
    height: "400px",
    display: "flex",
    justifyContent: "space-between",
    background:
      "linear-gradient(90deg, rgb(172 255 99 / 75%), rgb(15 45 255 / 75%))",
    border: "1px solid rgb(124 255 58)",
    backdropFilter: "blur(7px)",
    borderRadius: "3px",
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    zIndex: "1",
  };

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
              ? "Let's test if this is an Xbox!"
              : "Upload an image to compare with an aiWare Engine."
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
