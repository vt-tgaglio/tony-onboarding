import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ScanButton(props) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" disabled={!props.isEnabled}>
        Scan
      </Button>
    </Stack>
  );
}
