import React from "react";
import FloatingUFO from "./FloatingUFO";
import VignetteShadowOverlay from "./VignetteShadowOverlay";

const Backdrop = ({ object }) => {
  const containerStyles = {
    position: "absolute",
    color: "red",
    fontSize: "3rem",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1,
  };
  return (
    <div className="backdrop-container" style={containerStyles}>
      <VignetteShadowOverlay position="left" />
      <VignetteShadowOverlay position="right" />
      <FloatingUFO object={object} />
    </div>
  );
};

export default Backdrop;
