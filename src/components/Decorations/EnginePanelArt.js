import React from "react";

const EnginePanelArt = ({ engine }) => {
  const containerStyles = {
    display: "flex",
  };
  const artStyles = {
    width: "90px",
    userSelect: "none",
    pointerEvents: "none",
  };
  const artworkSrc = [];
  if (engine === "transcribe") {
    artworkSrc.push("./assets/img/transcription-0.png");
    artworkSrc.push("./assets/img/transcription-1.png");
    artworkSrc.push("./assets/img/transcription-2.png");
  } else if (engine === "recognition") {
    artworkSrc.push("./assets/img/recognition-0.png");
    artworkSrc.push("./assets/img/recognition-1.png");
    artworkSrc.push("./assets/img/recognition-2.png");
  } else {
    return null;
  }
  return (
    <div
      className="engine-panel-art"
      data-test-id="engine-panel-art"
      style={containerStyles}
    >
      <img
        className="animate__animated animate__fadeIn engine-art"
        style={artStyles}
        src={artworkSrc[0]}
      />
      <img
        className="animate__animated animate__fadeIn animate__delay1s engine-art"
        style={artStyles}
        src={artworkSrc[1]}
      />
      <img
        className="animate__animated animate__fadeIn animate__delay2s engine-art"
        style={artStyles}
        src={artworkSrc[2]}
      />
    </div>
  );
};

export default EnginePanelArt;
