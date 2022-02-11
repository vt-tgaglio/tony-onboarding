import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ScanButton(props) {
  const handleScanClick = () => {
    console.log("submitting to aiware engine");
    props.onClick();
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        onClick={handleScanClick}
        variant="contained"
        disabled={!props.isEnabled}
        color="success"
      >
        Scan
      </Button>
    </Stack>
  );
}
