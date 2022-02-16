import React, { useState } from "react";
import Backdrop from "../Decorations/Backdrop";
import HeroDisplay from "../Decorations/HeroDisplay";
import RecognitionContainer from "./RecognitionContainer";
import ScanningPanel from "../Panels/ScanningPanel";
import EngineSelector from "./EngineSelector";
import TranscribeContainer from "./TranscribeContainer";
import ConfigDetailsModal from "../Modals/ConfigDetailsModal";
import { xboxGreen } from "../../styles/colors";
import ConfigButton from "../Buttons/ConfigButton";

const Container = (props) => {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const containerStyles = {
    height: "calc(100vh - 55px)",
    background: "url(./assets/img/xbox-playstation-background.png)",
    backgroundColor: "black",
    backgroundSize: "cover",
    // background: "url(./grid.svg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "var(--x) var(--y)",
    position: "relative",
    overflow: "hidden",
  };
  const handleMouseMove = (e) => {
    const strength = 0.05;
    const moveX = -e.pageX * strength * 0.5 + "px";
    const moveY = -e.pageY * strength + "px";
    // Update the css variables
    document.documentElement.style.setProperty("--x", moveX);
    document.documentElement.style.setProperty("--y", moveY);
  };
  const renderEngineSelector = () => {
    const isRecognitionSelected = props.engine === "recognition";
    const isTranscribeSelected = props.engine === "transcribe";
    return (
      <>
        {!isRecognitionSelected && !isTranscribeSelected && (
          <EngineSelector onEngineChange={props.onEngineChange} />
        )}
        {isRecognitionSelected && renderRecognitionEngineUI()}
        {isTranscribeSelected && renderTranscriptionEngineUI()}
      </>
    );
  };
  const renderTranscriptionEngineUI = () => {
    return (
      <TranscribeContainer file={props.file} setObject={props.setObject} />
    );
  };
  const renderRecognitionEngineUI = () => {
    return (
      <>
        {!props.isScanning && (
          <RecognitionContainer
            file={props.file}
            onScanImage={props.onScanImage}
          />
        )}
        {props.isScanning && (
          <ScanningPanel
            file={props.file}
            onDoneScanning={props.onDoneScanning}
            setObject={props.setObject}
          />
        )}
      </>
    );
  };
  return (
    <div
      className="app-authed-container moving-background"
      data-test-id="app-authed-container"
      onMouseMove={handleMouseMove}
      style={containerStyles}
    >
      {renderEngineSelector()}

      <HeroDisplay />
      <Backdrop object={props.object} />

      <ConfigButton onClick={() => setIsConfigModalOpen(true)} />
      <ConfigDetailsModal
        isOpen={isConfigModalOpen}
        handleClose={() => setIsConfigModalOpen(false)}
      />
    </div>
  );
};

export default Container;
