import React from "react";
import { playstationBlue, xboxGreen } from "../../styles/colors";

const TranscriptResultsDisplay = ({ results }) => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  };
  const objectLabelStyles = {
    fontWeight: "bold",
    color: xboxGreen,
    fontSize: "2rem",
  };
  const transcriptStyles = {
    fontSize: "1.2rem",
    color: xboxGreen,
    textAlign: "center",
    fontStyle: "italic",
  };
  const { found, text } = results;
  const renderFoundObject = () => {
    if (!found) {
      return (
        <div style={{ ...objectLabelStyles }}>
          Didn't detect a game console.
        </div>
      );
    } else if (found === "xbox") {
      return <div style={{ ...objectLabelStyles, color: xboxGreen }}>XBOX</div>;
    } else if (found === "playstation") {
      return (
        <div style={{ ...objectLabelStyles, color: playstationBlue }}>
          PlayStation
        </div>
      );
    } else {
      return null;
    }
  };
  const renderTranscript = () => {
    return <p style={transcriptStyles}>"{results?.text}"</p>;
  };
  return (
    <div style={containerStyles}>
      <h1>Here's what we found:</h1>
      {renderFoundObject()}
      <h1>Your transcript:</h1>
      {renderTranscript()}
    </div>
  );
};

export default TranscriptResultsDisplay;
