import React from "react";
import { xboxGreen } from "../../styles/colors";
import UIModal from "./UIModal";

const UIDataSetModal = ({
  headerText,
  dataSet,
  children,
  isOpen,
  handleClose,
  className,
  testId,
}) => {
  const rowContainerStyles = {
    width: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    maxHeight: "70vh",
    overflowY: "scroll",
  };
  const rowStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "1.2rem",
    color: xboxGreen,
    padding: "25px",
    paddingBottom: "5px",
    paddingTop: "5px",
    borderBottom: "2px solid rgba(0,0,0,0.1)",
  };
  const headerStyles = {
    textAlign: "center",
    color: xboxGreen,
  };
  const row = (key, value, index) => {
    const keyStyles = {
      fontWeight: "bold",
    };
    let val;
    if (value === true) {
      val = "TRUE";
    } else if (value === false) {
      val = "FALSE";
    } else {
      val = value;
    }
    return (
      <div key={`${key}-${index}`} style={rowStyles}>
        <p style={keyStyles}>{key}</p>
        <p>{val}</p>
      </div>
    );
  };
  const renderDataSet = () => {
    return dataSet.map((item, index) => row(item.key, item.value, index));
  };
  return (
    <UIModal
      className={`ui-dataset-modal ${className}`}
      testId={testId}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div style={{ width: "100%" }}>
        <h1 className={`ui-dataset-modal-header`} style={headerStyles}>
          {headerText}
        </h1>
        <div style={rowContainerStyles}>{renderDataSet()}</div>
        {children}
      </div>
    </UIModal>
  );
};
export default UIDataSetModal;
