import React from "react";
import { Typography } from "@mui/material";

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
    opacity: `${isEnabled ? "100%" : "30%"}`,
  };
  const imageStyles = {
    maxWidth: "100%",
    width: `${isUserImage ? "150px" : "85px"}`,
    borderRadius: `${isUserImage ? "8px" : "0px"}`,
    marginBottom: "25px",
  };
  return (
    <div style={actionPanelStyles}>
      <div>
        <img src={image} style={imageStyles} />
      </div>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <div style={{ padding: "10px" }}>{children}</div>
    </div>
  );
};

export default ActionPanel;
