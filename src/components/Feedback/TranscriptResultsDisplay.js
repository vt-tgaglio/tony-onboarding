import React, { useState } from "react";
import { playstationBlue, xboxGreen } from "../../styles/colors";
import TranscriptDetailsModal from "../Modals/TranscriptDetailsModal";
import UIModal from "../Modals/UIModal";

const TranscriptResultsDisplay = ({ results }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  };
  const objectLabelStyles = {
    fontWeight: "bold",
    color: "rgb(45, 100, 230)",
    fontSize: "2.5rem",
    background: "black",
    padding: "5px 10px",
    boxShadow: "1px 3px 4px 0px #4bff00",
    fontFamily: '"Share Tech Mono", monospace',
  };
  const transcriptStyles = {
    fontSize: "1.2rem",
    color: xboxGreen,
    textAlign: "center",
    fontStyle: "italic",
    padding: "20px",
    paddingTop: "20px",
    background: "black",
    margin: "15px",
    borderRadius: "9px",
  };
  const { found, text } = results;
  const renderFoundObject = () => {
    if (!found) {
      return <div style={{ ...objectLabelStyles }}>No games detected</div>;
    } else if (found === "xbox") {
      return (
        <div
          style={{
            ...objectLabelStyles,
            color: xboxGreen,
            boxShadow: `1px 3px 4px 0px ${xboxGreen}`,
          }}
        >
          XBOX
        </div>
      );
    } else if (found === "playstation") {
      return (
        <div
          style={{
            ...objectLabelStyles,
            color: playstationBlue,
            boxShadow: `1px 3px 4px 0px #83d5e4`,
            letterSpacing: "-3px",
            fontStyle: "italic",
          }}
        >
          PlayStation
        </div>
      );
    } else {
      return null;
    }
  };
  const renderTranscript = () => {
    const blockQuoteStyle = {
      fontWeight: "bold",
      color: "white",
    };
    const blockQuote = () => <span style={blockQuoteStyle}>"</span>;
    return (
      <p style={transcriptStyles}>
        {blockQuote()}
        {results?.text}
        {blockQuote()}
      </p>
    );
  };
  const renderDuration = () => {
    const timeStyles = {
      fontWeight: "bold",
      color: xboxGreen,
      cursor: "pointer",
    };
    const time = (results.transcribeDuration / 1000 / 60).toFixed(2);
    return (
      <div style={timeStyles} onClick={() => setIsDetailsOpen(true)}>
        Time took: {time} minutes{" "}
      </div>
    );
  };
  return (
    <div style={containerStyles}>
      <h1>Here's what we found:</h1>
      {renderFoundObject()}
      <h1 style={{ marginBottom: 0 }}>Audio Transcript:</h1>
      {renderTranscript()}
      {renderDuration()}
      <TranscriptDetailsModal
        isOpen={isDetailsOpen}
        handleClose={() => setIsDetailsOpen(false)}
        results={results}
      />
    </div>
  );
};

export default TranscriptResultsDisplay;
