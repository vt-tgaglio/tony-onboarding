import React from "react";

const VignetteShadowOverlay = ({ position }) => {
  const containerStyles = {
    color: "red",
    position: "absolute",
    top: "0px",
    left: "0px",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
  };
  const imageStyles = {
    // background: position === "left" ? "red" : "blue ",
    pointerEvents: "none",
    maxHeight: "100%",
    position: "absolute",
    top: "0",
    transform: position === "left" ? "none" : "scaleX(-1)",
  };

  let positionStyle;
  if (position === "left") {
    positionStyle = { left: 0 };
  } else {
    positionStyle = { right: 0 };
  }

  return (
    <div className="shadow-overlay-container" style={containerStyles}>
      <img
        className="shadow-overlay"
        style={{ ...imageStyles, ...positionStyle }}
        src="./assets/img/vignette.png"
        alt=""
      />
    </div>
  );
};

export default VignetteShadowOverlay;
