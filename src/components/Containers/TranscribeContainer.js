import React, { useState } from "react";
import {
  createAudioJob,
  generateAudioJobResults,
  getAudioJobResults,
  getAudioJobStatus,
  parseAudioJobResults,
} from "../../api/transcription";
import { API_POLL_FREQUENCY, API_TIMEOUT_DURATION } from "../../config";
import { formContainerStyles } from "../../styles/containers";
import TranscribeButton from "../Buttons/TranscribeButton";
import UploadButton from "../Buttons/UploadButton";
import Header from "../Decorations/Header";
import AudioPlayer from "../Feedback/AudioPlayer";
import TranscriptResultsDisplay from "../Feedback/TranscriptResultsDisplay";
import ActionPanel from "../Panels/ActionPanel";

const TranscribeContainer = ({ file }) => {
  const [jobId, setJobId] = useState(null);
  const [tdoId, setTdoId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);

  const initiateTranscribeJob = (file) => {
    createAudioJob(file).then((res) => {
      const { id, targetId } = res.data.launchSingleEngineJob;

      setJobId(id);
      setTdoId(targetId);
      setIsRunning(true);
      pollTranscribeJobStatus(targetId, id);
    });
  };
  const pollTranscribeJobStatus = (tdoIdQuery, jobIdQuery) => {
    let counter = 0;
    const poll = setInterval(() => {
      counter += API_POLL_FREQUENCY;
      getAudioJobStatus(tdoIdQuery, jobIdQuery).then((res) => {
        const { status } = res.data.temporalDataObject.jobs.records[0];
        if (status === "complete") {
          clearInterval(poll);
          getAudioJobResults(jobIdQuery).then((res) => {
            const parsedResults = generateAudioJobResults(
              parseAudioJobResults(res)
            );
            setIsFinished(true);
            setResults(parsedResults);
          });
        } else if (counter >= API_TIMEOUT_DURATION) {
          clearInterval(poll);
          console.log(
            "The API engine did not finish before timeout. Displaying error."
          );
        }
      });
    }, API_POLL_FREQUENCY);
  };

  const renderActionButton = () => {
    if (file.getUrl) {
      return (
        <TranscribeButton
          onClick={() => {
            console.log("scanning audio....");
            initiateTranscribeJob(file);
          }}
        />
      );
    } else {
      return <UploadButton labelText="Upload Audio" />;
    }
  };
  return (
    <>
      <Header />
      <div style={formContainerStyles}>
        <ActionPanel
          description={file.getUrl ? file.file.name : "Detect Game Console"}
          isEnabled
          image="./add-audio.png"
        >
          {file.getUrl ? <AudioPlayer audioSource={file.getUrl} /> : null}
          {renderActionButton()}
        </ActionPanel>
        {isFinished ? <TranscriptResultsDisplay results={results} /> : null}
      </div>
    </>
  );
};

export default TranscribeContainer;
