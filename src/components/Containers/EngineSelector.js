import React from "react";
import { formContainerStyles } from "../../styles/containers";
import Header from "../Decorations/Header";
import EnginePanel from "../Panels/EnginePanel";

const EngineSelector = ({ onEngineChange }) => {
  return (
    <>
      <Header />
      <div
        className="engine-selector"
        data-test-id="engine-selector"
        style={formContainerStyles}
      >
        <EnginePanel
          engine="transcribe"
          actionLabel="Transcription"
          descriptionText="Use audio files"
          buttonText="Select Engine"
          onSelectEngine={() => onEngineChange("transcribe")}
        />
        <EnginePanel
          engine="recognition"
          actionLabel="Recognition"
          buttonText="Select Engine"
          descriptionText={`Use games, covers, & pics`}
          onSelectEngine={() => onEngineChange("recognition")}
        />
      </div>
    </>
  );
};

export default EngineSelector;
