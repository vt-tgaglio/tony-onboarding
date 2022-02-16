import React from "react";
import { xboxGreen } from "../../styles/colors";

const ConfigButton = ({ onClick }) => {
  const containerStyles = {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    cursor: "pointer",
    padding: "10px",
    width: "100%",
    margin: "10px",
    zIndex: "10",
  };
  const buttonStyles = {
    background: "rgba(0,0,0,0.3)",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: xboxGreen,
    padding: "10px",
    borderRadius: "9px",
    display: "inline",
    cursor: "pointer",
  };
  return (
    <div
      className="config-button-container"
      data-test-id="config-button-container"
      style={containerStyles}
      onClick={onClick}
    >
      <span
        className="config-button"
        data-test-id="config-button"
        style={buttonStyles}
      >
        Open Configuration
      </span>
    </div>
  );
};

export default ConfigButton;
