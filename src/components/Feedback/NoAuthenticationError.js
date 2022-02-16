import React from "react";
import { xboxGreen } from "../../styles/colors";
import { formContainerStyles } from "../../styles/containers";

const NoAuthenticationError = () => {
  const containerStyles = {
    flexDirection: "column",
    margin: "0 auto",
    marginTop: "75px",
    padding: "50px",
    height: "auto",
  };
  const imageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const imageStyles = {
    width: "300px",
    filter: "hue-rotate(212deg)",
  };
  const headerStyles = {
    textAlign: "center",
    color: "hotpink",
    textShadow: "-3px 2px 4px black",
  };
  const messageStyles = {
    textAlign: "center",
    background: "black",
    color: xboxGreen,
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    display: "inline",
    margin: "0 auto",
    fontWeight: "bold",
    padding: "10px",
    fontSize: "1.2rem",
    borderRadius: "9px",
  };
  const spanStyles = {
    color: "hotpink",
    // padding: "0px 12px",
  };
  return (
    <div
      className="no-authentication-error"
      data-test-id="no-authentication-error"
      style={{
        ...formContainerStyles,
        ...containerStyles,
      }}
    >
      <div style={imageContainerStyles}>
        <img style={imageStyles} alt="" src="./assets/img/error.png" />
      </div>
      <h1 style={headerStyles}>Unable to connect to aiWARE session.</h1>
      <p style={messageStyles}>
        Please verify that a valid session token is present inside this
        project's <span style={spanStyles}>/src/token.js</span> file.
      </p>
    </div>
  );
};

export default NoAuthenticationError;
