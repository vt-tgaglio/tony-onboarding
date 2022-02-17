import React from "react";
import Modal from "@mui/material/Modal";
import { formContainerStyles } from "../../styles/containers";

export default function UIModal({
  children,
  handleClose = () => {},
  isOpen = true,
  className = "",
  testId = "ui-modal",
}) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`ui-modal ${className}`}
          data-test-id={`ui-modal-${testId}`}
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
