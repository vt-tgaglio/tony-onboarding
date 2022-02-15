import React from "react";
import { initialIsDone, placeholderUploadedImageSrc } from "../../config";
import { playstationBlue, xboxGreen } from "../../styles/colors";

const ScanResultsDisplay = ({ imageSrc, results, object }) => {
  const componentContainerStyles = {
    display: "flex",
    padding: "15px",
    justifyContent: "space-between",
  };
  const dataContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const imageStyles = {
    maxWidth: "120px",
    borderRadius: "20px",
    border: "2px solid " + xboxGreen,
  };
  const headerStyles = {
    color: xboxGreen,
  };
  const objectStyles = {
    color: object === "xbox" ? xboxGreen : "black",
    fontSize: "3rem",
    fontStyle: "italic",
    textTransform: "uppercase",
    fontWeight: "bold",
    textShadow:
      "3px 1px 5px " + object === "xbox" ? xboxGreen : playstationBlue,
    fontFamily: `'Share Tech Mono', monospace`,
  };
  const uploadedImageSrc = initialIsDone
    ? placeholderUploadedImageSrc
    : imageSrc;
  const handleChangeImageClick = () => {
    window.location.reload(false);
  };
  return (
    <div style={componentContainerStyles}>
      <div
        onClick={handleChangeImageClick}
        className="scan-results-image-container"
      >
        <div className="scan-results-image-overlay">
          <span>Change</span>
          <span>Image</span>
        </div>
        <img alt="" style={imageStyles} src={uploadedImageSrc} />
      </div>
      <div style={dataContainerStyles}>
        <h1 style={headerStyles}>Here's what we found:</h1>
        <span
          className="animate__animated animate__fadeIn"
          style={objectStyles}
        >
          {object}
        </span>
      </div>
    </div>
  );
};
export default ScanResultsDisplay;
