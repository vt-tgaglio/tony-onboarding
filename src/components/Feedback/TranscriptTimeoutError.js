import React from "react";
import { xboxGreen } from "../../styles/colors";

const TranscriptTimeoutError = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  };
  const imageStyles = {
    width: "200px",
    filter: "drop-shadow(rgba(0, 0, 0, 0.25) 2px 4px 6px)",
  };
  const headerStyle = {
    color: xboxGreen,
    background: "black",
    padding: "5px 10px",
    borderRadius: "9px",
  };
  const msgStyle = {
    background: "black",
    color: "pink",
    padding: "5px 10px",
    fontWeight: "bold",
  };
  return (
    <div
      className="transcript-timeout-error"
      data-test-id="transcript-timeout-error"
      style={containerStyles}
    >
      <img style={imageStyles} alt="" src="./assets/img/timeout-glyph.png" />
      <h1 style={headerStyle}>Request Timed out.</h1>
      <p style={msgStyle}>Open Dev Console to reveal details</p>
    </div>
  );
};

export default TranscriptTimeoutError;
