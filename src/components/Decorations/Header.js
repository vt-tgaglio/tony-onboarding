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
    margin: "0px",
    fontSize: "1.7rem",
    textShadow: "black 3px 4px 4px",
    background: "black",
    textTransform: "uppercase",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
    textShadow: "1px 1px 8px rgb(11 240 180)",
  };
  const headingStyles = {
    padding: "0px",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "3rem",
    color: "white",
    margin: 0,
  };
  // const fancyTextClip = {
  //   background: "linear-gradient(90deg, #56f504, rgb(0 114 255))",
  //   backgroundClip: "text",
  //   WebkitBackgroundClip: "text",
  //   WebkitTextFillColor: "transparent",
  //   color: "transparent",
  // };
  const xboxSpanStyles = {
    color: xboxGreen,
    textShadow: "0px 0px 11px #79f133",
    fontStyle: "normal",
    fontFamily: '"Share Tech Mono", monospace',
  };
  const psSpanStyles = {
    color: playstationBlue,
    textShadow: "rgb(0 0 0) 0px 0px 11px",
    // fontStyle: "normal",
    fontFamily: '"Share Tech Mono", monospace',
    letterSpacing: "-3px",
  };
  return (
    <div className="header" data-test-id="header" style={containerStyles}>
      <p className="header-subtitle" style={subHeadingStyles}>
        What game you got?
      </p>
      <h1 className="header-title" style={headingStyles}>
        <span style={xboxSpanStyles}>XBOX</span> or{" "}
        <span style={psSpanStyles}>PlayStation</span>?
      </h1>
    </div>
  );
};

export default Header;
