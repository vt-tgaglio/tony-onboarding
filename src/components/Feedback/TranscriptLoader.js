import React from "react";
import { xboxGreen } from "../../styles/colors";
import ImageScanAnimation from "../Decorations/ImageScanAnimation";

const TranscriptLoader = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  };
  const imageWaveformStyles = {
    maxWidth: "400px",
    borderRadius: "20px",
    border: "none",
    filter: "hue-rotate(66deg) brightness(1.5) drop-shadow(2px 4px 6px black)",
  };
  const headerStyles = {
    background: "black",
    color: xboxGreen,
    padding: "5px 25px",
    borderRadius: "9px",
    textShadow: "1px 1px 8px rgb(11 240 180)",
  };
  return (
    <div
      className="transcript-loader"
      data-test-id="transcript-loader"
      style={containerStyles}
    >
      <ImageScanAnimation
        imageSrc="./assets/img/waveform.webp"
        imageOverrideStyles={imageWaveformStyles}
      />
      <h1 style={headerStyles}>Searching audio...</h1>
    </div>
  );
};

export default TranscriptLoader;
