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
        className="form-container recognition-engine-container animate__animated animate__fadeIn animate__delay1s"
        data-test-id="recognition-engine-container"
        style={formContainerStyles}
      >
        <ActionPanel
          isEnabled={true}
          className="upload-image-panel"
          testId="upload-image-panel"
          image={
            props.file.getUrl ? props.file.getUrl : "./assets/img/add-image.png"
          }
          description={
            props.file.getUrl ? "Image uploaded" : "Detect a Game Console"
          }
        >
          <UploadButton
            labelText={props.file.getUrl ? "Change Image" : "Upload Image"}
            isTestMode={props.isTestMode}
            setTestFile={props.setTestFile}
          />
        </ActionPanel>
        <ActionPanel
          isEnabled={props.file.getUrl}
          image="./palm-scan.png"
          description="What could it be?"
          className="scan-image-panel"
          testId="scan-image-panel"
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
