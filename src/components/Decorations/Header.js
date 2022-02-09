import React from "react";
import { xboxGreen, playstationBlue } from "../../styles/colors";

const Header = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const subHeadingStyles = {
    color: xboxGreen,
    padding: 0,
    margin: 0,
    fontSize: "1.5rem",
  };
  const headingStyles = {
    padding: "0px",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "3rem",
    color: "white",
    margin: 0,
  };
  const fancyTextClip = {
    background: "linear-gradient(90deg, #56f504, rgb(0 114 255))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };
  const xboxSpanStyles = {
    color: xboxGreen,
    textShadow: "0px 0px 11px #79f133",
    fontStyle: "normal",
  };
  const psSpanStyles = {
    color: playstationBlue,
    textShadow: "rgb(0 0 0) 0px 0px 11px",
    fontStyle: "normal",
  };
  return (
    <div style={containerStyles}>
      <p style={subHeadingStyles}>Let's see..... is the machine an</p>
      <h1 style={headingStyles}>
        <span style={xboxSpanStyles}>XBOX</span> or{" "}
        <span style={psSpanStyles}>PlayStation</span>?
      </h1>
    </div>
  );
};

export default Header;
