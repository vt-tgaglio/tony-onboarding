import React from "react";
import { xboxGreen } from "../../styles/colors";

const PercentDisplay = ({ percent }) => {
  const percentStyles = {
    fontSize: "2rem",
    fontStyle: "italic",
    fontWeight: "bold",
    textShadow: "rgb(122, 193, 0) 2px 4px 2px",
    backgroundColor: xboxGreen,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const glyphStyles = {
    fontSize: "0.5em",
  };
  return (
    <div style={percentStyles}>
      {percent}
      <span style={glyphStyles}>%</span>
    </div>
  );
};
export default PercentDisplay;
