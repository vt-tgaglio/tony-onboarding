import React from "react";
import { xboxGreen } from "../../styles/colors";

const InvalidFileTypeError = () => {
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
  };
  const imageStyles = {
    width: "200px",
    filter: "hue-rotate(212deg)",
    cursor: "pointer",
  };
  const headerStyles = {
    textAlign: "center",
    color: "hotpink",
    background: "black",
    padding: "10px",
    borderRadius: "9px",
    textTransform: "uppercase",
    fontSize: "1.4rem",
    fontWeight: "bold",
    margin: "10px",
  };
  const descriptionStyles = {
    color: xboxGreen,
    background: "black",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "9px",
    textTransform: "uppercase",
    textAlign: "center",
  };
  return (
    <div
      className="invalid-file-type-error"
      data-test-id="invalid-file-type-error"
      style={containerStyles}
    >
      <img
        onClick={() => window.location.reload(false)}
        style={imageStyles}
        src="./assets/img/error.png"
      />
      <span style={headerStyles}>Invalid File Type</span>
      <span style={descriptionStyles}>
        This app only supports .mp3 and .m4a audio files. <br />
        <br /> Click the crashed alien to try again.
      </span>
    </div>
  );
};

export default InvalidFileTypeError;
