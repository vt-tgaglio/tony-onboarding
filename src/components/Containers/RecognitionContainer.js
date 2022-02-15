import React from "react";
import ActionPanel from "../Panels/ActionPanel";
import Header from "../Decorations/Header";
import ScanButton from "../Buttons/ScanButton";
import UploadButton from "../Buttons/UploadButton";
import { formContainerStyles } from "../../styles/containers";

const RecognitionContainer = (props) => {
  return (
    <>
      <Header />
      <div
        className="form-container animate__animated animate__fadeIn animate__delay1s"
        style={formContainerStyles}
      >
        <ActionPanel
          isEnabled={true}
          image={props.file.getUrl ? props.file.getUrl : "./add-image.png"}
          description={
            props.file.getUrl ? "Image uploaded" : "Detect a Game Console"
          }
        >
          <UploadButton
            labelText={props.file.getUrl ? "Change Image" : "Upload Image"}
          />
        </ActionPanel>
        <ActionPanel
          isEnabled={props.file.getUrl}
          image="./palm-scan.png"
          description="What could it be?"
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

export default RecognitionContainer;