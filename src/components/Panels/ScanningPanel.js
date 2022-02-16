import React, { useEffect, useState } from "react";
import { xboxGreen } from "../../styles/colors";
import { phrasesArray } from "../Decorations/PhrasesArray";
import { formContainerStyles } from "../../styles/containers";
import Header from "../Decorations/Header";
import ImageScanAnimation from "../Decorations/ImageScanAnimation";
import LinearProgressBar from "../Feedback/LinearProgressBar";
import ScanResultsDisplay from "../Feedback/ScanResultsDisplay";
import {
  initialIsDone,
  initialObjectDetected,
  initialScanResults,
  mockProgressSpeed,
} from "../../config";

const ScanningPanel = (props) => {
  const phraseStyles = {
    fontSize: "1.4rem",
    paddingTop: "10px",
    color: xboxGreen,
    textShadow: "0 0 8px black",
  };
  const [phrase, setPhrase] = useState(phrasesArray[0]);
  const [progress, setProgress] = useState(10);
  const [isDoneLocal, setIsDoneLocal] = useState(initialIsDone);
  const [foundObject, setFoundObject] = useState(initialObjectDetected);
  const [scanResults, setScanResults] = useState(initialScanResults);
  const updateObject = (objName) => {
    setFoundObject(objName);
    props.setObject(objName);
  };
  const mockResults = () => {
    const { name } = props.file.file;
    if (name.includes("playstation")) {
      updateObject("playstation");
    } else if (name.includes("xbox")) {
      updateObject("xbox");
    } else {
      updateObject("Unknown 😲");
    }
  };
  useEffect(() => {
    const cyclePhrase = setInterval(() => {
      if (index >= phrasesArray.length - 1) {
        index = 0;
      } else {
        index++;
      }
      setPhrase(phrasesArray[index]);
    }, 3000);

    let p = 10;
    const mockProgress = setInterval(() => {
      p++;
      if (p === 101) {
        clearInterval(cyclePhrase);
        clearInterval(mockProgress);
        setPhrase("Processing complete!");
        props.onDoneScanning();
        setIsDoneLocal(true);
        mockResults();
        return;
      }
      setProgress(p);
    }, mockProgressSpeed);
    let index = 0;
  }, []);
  return (
    <>
      <Header />
      <div
        className="scanning-panel"
        data-test-id="scanning-panel"
        style={{
          ...formContainerStyles,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          {!isDoneLocal && <ImageScanAnimation imageSrc={props.file.getUrl} />}
          {isDoneLocal && (
            <ScanResultsDisplay
              results={scanResults}
              imageSrc={props.file.getUrl}
              object={foundObject}
            />
          )}
          <LinearProgressBar progress={progress} />
        </div>
        <div style={phraseStyles}>{phrase}...</div>
      </div>
    </>
  );
};

export default ScanningPanel;
