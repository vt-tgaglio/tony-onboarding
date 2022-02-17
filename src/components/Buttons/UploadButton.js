import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function UploadButton(props) {
  const handleOpenFilePanel = () => {
    console.log(`isTestMode: ${props.isTestMode}`);
    if (props.isTestMode) {
      console.log("setting test file");
      props.setTestFile();
      return;
    }
    const microFrontend = {
      name: "DATA_CENTER_IMPORTER",
      config: {
        name: "Local Importer",
      },
    };

    const panelConfig = {
      type: "APP_BAR_PANEL_TEMPLATE",
      marginTop: 55,
      marginStart: 0,
      size: "large",
      zIndex: 1000,
      dimmed: 0,
    };
    setTimeout(() => {
      window.aiware.mountPanel({
        panelId: "DATA_CENTER_IMPORTER",
        microFrontend: microFrontend,
        panelConfig: panelConfig,
      });
    }, 0);
    setTimeout(() => {
      console.log("Click browse button");
      document
        .querySelector(`[data-test="data-center-importer-local-upload-button"]`)
        .click();
    }, 1);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Button
          onClick={handleOpenFilePanel}
          variant="contained"
          component="span"
          color="success"
        >
          {props.labelText}
        </Button>
      </label>
    </Stack>
  );
}
