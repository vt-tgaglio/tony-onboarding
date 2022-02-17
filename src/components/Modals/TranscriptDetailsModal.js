import React from "react";
import { CLUSTER_ID } from "../../api/common/clusterId";
import { ENGINE_TRANSCRIPTION_ID } from "../../api/common/engineId";
import {
  enableMockApiResponse,
  ENGINE_NAME_TRANSCRIPTION,
  VERITONE_ENVIRONMENT_GQL_URL,
  VERITONE_ENVIRONMENT_NAME,
} from "../../config";
import { xboxGreen } from "../../styles/colors";
import UIDataSetModal from "./UIDataSetModal";
import UIModal from "./UIModal";

const TranscriptDetailsModal = ({
  results,
  isOpen,
  handleClose,
  isTestMode,
}) => {
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
  const createData = (key, value) => {
    return { key: key, value: value };
  };
  const dataSet = [
    createData("Transcription Engine ID", ENGINE_TRANSCRIPTION_ID),
    createData("Mock Response Enabled?", isTestMode || enableMockApiResponse),
    createData("Transcribed Text", `"${results.text}"`),
    createData("Matched Console", results.found),
    createData("Total Job Time", getDuration(results.transcribeDuration)),
    createData("Engine Name*", ENGINE_NAME_TRANSCRIPTION),
    createData("Cluster ID*", CLUSTER_ID),
    createData("Veritone Platform*", VERITONE_ENVIRONMENT_NAME),
    createData("Veritone Endpoint*", VERITONE_ENVIRONMENT_GQL_URL),
  ];
  return (
    <UIDataSetModal
      className="transcription-details-modal"
      testId="transcription-details-modal"
      isOpen={isOpen}
      dataSet={dataSet}
      headerText="aiWARE Engine Results"
      handleClose={handleClose}
    >
      {disclaimer()}
    </UIDataSetModal>
  );
};
export default TranscriptDetailsModal;
