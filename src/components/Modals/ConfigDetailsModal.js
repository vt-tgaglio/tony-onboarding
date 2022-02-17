import React from "react";
import { CLUSTER_ID } from "../../api/common/clusterId";
import { ENGINE_TRANSCRIPTION_ID } from "../../api/common/engineId";
import {
  API_MOCK_JOB_STATUS,
  API_POLL_FREQUENCY,
  API_TIMEOUT_DURATION,
  enableAutoUploadClicks,
  enableMockApiResponse,
  ENGINE_NAME_TRANSCRIPTION,
  MATCH_WORDS,
  mockProgressSpeed,
  token,
  TRANSCRIPT_FILE_TYPE_ALLOWED,
  VERITONE_ENVIRONMENT_GQL_URL,
  VERITONE_ENVIRONMENT_NAME,
} from "../../config";
import { xboxGreen } from "../../styles/colors";
import UIDataSetModal from "./UIDataSetModal";

const ConfigDetailsModal = ({ isOpen, handleClose, isTestMode }) => {
  const createData = (key, value) => {
    return { key: key, value: value };
  };
  const dataSet = [
    createData("Veritone Platform", VERITONE_ENVIRONMENT_NAME),
    createData("Veritone Endpoint", VERITONE_ENVIRONMENT_GQL_URL),
    createData("aiWARE Auth Token", token),
    createData("Auto-click Importer Uploads?", enableAutoUploadClicks),
    createData("Recognition: Mock Progress Speed", mockProgressSpeed),
    createData("Cypress Test Mode?", isTestMode),
    createData(
      "Transcription: Mock Response?",
      isTestMode || enableMockApiResponse
    ),
    createData("Transcription: API Job Timeout", API_TIMEOUT_DURATION),
    createData("Transcription: API Poll Interval", API_POLL_FREQUENCY),
    createData("Transcription: API Mock Job Status", API_MOCK_JOB_STATUS),
    createData("Transcription: Match Words", `${MATCH_WORDS.join(", ")}`),
    createData(
      "Transcription: Allowed File Types",
      `${TRANSCRIPT_FILE_TYPE_ALLOWED.join(", ")}`
    ),
    createData("Transcription: Engine ID", ENGINE_TRANSCRIPTION_ID),
    createData("Transcription: Engine Name", ENGINE_NAME_TRANSCRIPTION),
    createData("Transcription: Cluster ID", CLUSTER_ID),
  ];
  const footer = () => {
    const footerStyles = {
      padding: "15px",
      color: xboxGreen,
      fontSize: "1.3rem",
      opacity: 0.7,
    };
    return (
      <div style={footerStyles}>
        * Some configs are available to set inside the src/config.js file.
      </div>
    );
  };
  return (
    <UIDataSetModal
      testId="config-details-modal"
      className="config-details-modal"
      headerText="Current Configuration"
      dataSet={dataSet}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {footer()}
    </UIDataSetModal>
  );
};

export default ConfigDetailsModal;
