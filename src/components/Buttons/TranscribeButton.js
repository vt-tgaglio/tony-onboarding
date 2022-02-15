import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TranscribeButton(props) {
  const handleButtonClick = () => {
    props.onClick();
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button onClick={handleButtonClick} variant="contained" color="success">
        Scan Audio
      </Button>
    </Stack>
  );
}
