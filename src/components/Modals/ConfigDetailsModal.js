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
} from "../../config";
import { xboxGreen } from "../../styles/colors";
import UIDataSetModal from "./UIDataSetModal";

const ConfigDetailsModal = ({ isOpen, handleClose }) => {
  const createData = (key, value) => {
    return { key: key, value: value };
  };
  const dataSet = [
    createData("aiWARE Auth Token", token),
    createData("Auto click importer uploads enabled?", enableAutoUploadClicks),
    createData("Recognition Mock Progress Speed", mockProgressSpeed),
    createData("Transcription Mock Response Enabled?", enableMockApiResponse),
    createData("Transcription API Timeout Duration", API_TIMEOUT_DURATION),
    createData("Transcription API Polling Interval", API_POLL_FREQUENCY),
    createData("Transcription API Mock Job Status", API_MOCK_JOB_STATUS),
    createData("Transcription Matching Words", `${MATCH_WORDS.join(", ")}`),
    createData(
      "Transcription File Types Allowed",
      `${TRANSCRIPT_FILE_TYPE_ALLOWED.join(", ")}`
    ),
    createData("Transcription Engine ID", ENGINE_TRANSCRIPTION_ID),
    createData("Engine Name", ENGINE_NAME_TRANSCRIPTION),
    createData("Cluster ID", CLUSTER_ID),
    createData("Veritone Platform", "STAGE"),
    createData("Veritone Endpoint", VERITONE_ENVIRONMENT_GQL_URL),
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
