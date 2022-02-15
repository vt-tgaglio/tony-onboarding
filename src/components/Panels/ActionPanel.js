import React from "react";

const ActionPanel = ({ description, isEnabled, image, children }) => {
  const isUserImage = !image.startsWith("./");
  const actionPanelStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRight: "2px solid rgb(135 255 94 / 17%)",
    padding: "50px",
    width: "50%",
    opacity: `${isEnabled ? "100%" : "75%"}`,
    filter: `${isEnabled ? "none" : "saturate(0) blur(4px) opacity(0.5)"}`,
    // color: `${isEnabled ? xboxGreen : "inherit"}`,
    // textShadow: `${isEnabled ? "rgb(0 0 0) 2px 2px 5px" : "0px"}`,
  };
  const imageStyles = {
    maxWidth: "100%",
    width: `${isUserImage ? "150px" : "85px"}`,
    borderRadius: `${isUserImage ? "8px" : "0px"}`,
    marginBottom: "25px",
    filter: "drop-shadow(2px 4px 6px #9bf00b)",
  };
  const descStyles = {
    margin: "0px",
    textAlign: "center",
    background: "#1f2937",
    color: "#9bf00b",
    padding: "5px 10px 5px 10px",
    borderRadius: "9px",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "1.5em",
  };
  return (
    <div style={actionPanelStyles}>
      <div>
        <img alt={description} src={image} style={imageStyles} />
      </div>
      <p style={descStyles}>{description}</p>
      <div style={{ padding: "10px" }}>{children}</div>
    </div>
  );
};

export default ActionPanel;
