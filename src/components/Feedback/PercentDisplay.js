import React from "react";
import { xboxGreen } from "../../styles/colors";

const PercentDisplay = ({ percent }) => {
  const percentStyles = {
    fontSize: "2rem",
    fontStyle: "italic",
    fontWeight: "bold",
    textShadow: "rgb(122, 193, 0) 2px 4px 2px",
    backgroundColor: "rgb(155 240 11)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: "1px 1px 19px 4px #60ff22",
    color: "black",
  };
  const glyphStyles = {
    fontSize: "0.5em",
    padding: "5px",
  };
  return (
    <div style={percentStyles}>
      {percent}
      <span style={glyphStyles}>%</span>
    </div>
  );
};
export default PercentDisplay;
