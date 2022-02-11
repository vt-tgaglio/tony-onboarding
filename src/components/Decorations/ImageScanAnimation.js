import React from "react";
import { initialIsScanning, placeholderUploadedImageSrc } from "../../config";
import { xboxGreen } from "../../styles/colors";

const ImageScanAnimation = ({ imageSrc }) => {
  const imageStyles = {
    maxWidth: "120px",
    borderRadius: "20px",
    border: "2px solid" + xboxGreen,
  };
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
  };
  const animatedMagnifyStyes = {
    position: "absolute",
    width: "70px",
    zIndex: 1,
  };
  const overlayGifStyles = {
    position: "absolute",
    transform: "scale(1.2)",
  };
  const uploadedImageSrc = initialIsScanning
    ? placeholderUploadedImageSrc
    : imageSrc;
  return (
    <div style={containerStyles}>
      <img
        className="magnify-glyph"
        style={animatedMagnifyStyes}
        src="./assets/img/magnify.png"
      />
      <img style={overlayGifStyles} src="./assets/img/scan-overlay.gif" />
      <img style={imageStyles} src={uploadedImageSrc} />
    </div>
  );
};

export default ImageScanAnimation;
