import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { formContainerStyles } from "../../styles/containers";

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UIModal({
  children,
  handleClose = () => {},
  isOpen = true,
  className = "",
  testId = "ui-modal",
}) {
  return (
    <div className={className} data-test-id={testId}>
      <Modal
        open={isOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            ...formContainerStyles,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
          }}
        >
          {children}
        </div>
      </Modal>
    </div>
  );
}
