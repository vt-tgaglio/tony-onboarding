import React from "react";
import { CLUSTER_ID } from "../../api/common/clusterId";
import { ENGINE_TRANSCRIPTION_ID } from "../../api/common/engineId";
import {
  enableMockApiResponse,
  ENGINE_NAME_TRANSCRIPTION,
  VERITONE_ENVIRONMENT_GQL_URL,
} from "../../config";
import { xboxGreen } from "../../styles/colors";
import UIModal from "./UIModal";

const TranscriptDetailsModal = ({ results, isOpen, handleClose }) => {
  const rowContainerStyles = {
    width: "100%",
    background: "rgba(0,0,0,0.3)",
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
  const row = (key, value) => {
    const keyStyles = {
      fontWeight: "bold",
    };
    return (
      <div style={rowStyles}>
        <p style={keyStyles}>{key}</p>
        <p>{value}</p>
      </div>
    );
  };
  const getDuration = (time) => {
    if (!time) return "";
    return (time / 1000 / 60).toFixed(2) + " minutes";
  };
  const disclaimer = () => {
    const disclaimerStyles = {
      padding: "15px",
      color: xboxGreen,
      fontSize: "1.3rem",
      opacity: 0.7,
    };
    return (
      <div style={disclaimerStyles}>
        * Real API are calls are not sent when mock response is enabled.
      </div>
    );
  };
  return (
    <UIModal isOpen={isOpen} handleClose={handleClose}>
      <div style={{ width: "100%" }}>
        <h1 style={headerStyles}>aiWARE Engine Results</h1>
        <div style={rowContainerStyles}>
          {row(
            "Mock Response Enabled?",
            enableMockApiResponse ? "TRUE" : "FALSE"
          )}
          {row("Transcribed Text", `"${results.text}"`)}
          {row("Matched Console", results.found)}
          {row("Total job time", getDuration(results.transcribeDuration))}
          {row("Engine ID*", ENGINE_TRANSCRIPTION_ID)}
          {row("Engine Name*", ENGINE_NAME_TRANSCRIPTION)}
          {row("Cluster ID*", CLUSTER_ID)}
          {row("Veritone Platform*", "STAGE")}
          {row("Veritone Endpoint*", VERITONE_ENVIRONMENT_GQL_URL)}
          {disclaimer()}
        </div>
      </div>
    </UIModal>
  );
};
export default TranscriptDetailsModal;
