import React from "react";
import { xboxGreen } from "../../styles/colors";
import PercentDisplay from "./PercentDisplay";

export default function LinearProgressBar({ progress }) {
  const progressBarContainerStyles = {
    width: "500px",
    background: "black",
    borderRadius: "15px",
    overflow: "hidden",
    border: "2px solid black",
  };
  const progressBarStyles = {
    // backgroundColor: xboxGreen,
    background: "linear-gradient(184deg, rgb(155, 240, 11), rgb(70 138 208))",
    border: `2px solid ${xboxGreen}`,
    width: progress + "%",
    borderRadius: "15px",
    padding: "10px",
  };
  return (
    <div style={progressBarContainerStyles}>
      <div style={progressBarStyles}>
        <PercentDisplay percent={progress} />
      </div>
    </div>
  );
}
