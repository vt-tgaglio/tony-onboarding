import React, { useState } from "react";
import {
  createAudioJob,
  generateAudioJobResults,
  getAudioJobResults,
  getAudioJobStatus,
  parseAudioJobResults,
} from "../../api/transcription";
import {
  API_POLL_FREQUENCY,
  API_TIMEOUT_DURATION,
  initialResults,
  TRANSCRIPT_FILE_TYPE_ALLOWED,
} from "../../config";
import { formContainerStyles } from "../../styles/containers";
import TranscribeButton from "../Buttons/TranscribeButton";
import UploadButton from "../Buttons/UploadButton";
import Header from "../Decorations/Header";
import AudioPlayer from "../Feedback/AudioPlayer";
import InvalidFileTypeError from "../Feedback/InvalidFileTypeError";
import TranscriptLoader from "../Feedback/TranscriptLoader";
import TranscriptResultsDisplay from "../Feedback/TranscriptResultsDisplay";
import TranscriptTimeoutError from "../Feedback/TranscriptTimeoutError";
import ActionPanel from "../Panels/ActionPanel";

const TranscribeContainer = ({ file, setObject, isTestMode, setTestFile }) => {
  const [jobId, setJobId] = useState(null);
  const [tdoId, setTdoId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReqTimedOut, setIsReqTimedOut] = useState(false);
  const [results, setResults] = useState(initialResults);
  const [transcribeDuration, setTranscribeDuration] = useState(0);
  const [isInvalidFileType, setIsInvalidFileType] = useState(false);

  const initiateTranscribeJob = () => {
    const { type } = file;
    if (!TRANSCRIPT_FILE_TYPE_ALLOWED.includes(type)) {
      setIsInvalidFileType(true);
      return console.warn(`
      tony-onboarding:
      
      Invalid file type used for Transcription Engine.
      `);
    }
    createAudioJob(file, isTestMode)
      .then((res) => {
        const { id, targetId } = res.data.launchSingleEngineJob;

        setJobId(id);
        setTdoId(targetId);
        setIsRunning(true);
        pollTranscribeJobStatus(targetId, id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const pollTranscribeJobStatus = (tdoIdQuery, jobIdQuery) => {
    let counter = 0;
    const poll = setInterval(() => {
      counter += API_POLL_FREQUENCY;
      getAudioJobStatus(tdoIdQuery, jobIdQuery, isTestMode).then((res) => {
        const { status } = res.data.temporalDataObject.jobs.records[0];
        if (status === "complete") {
          clearInterval(poll);
          getAudioJobResults(jobIdQuery, isTestMode).then((res) => {
            const parsedResults = generateAudioJobResults(
              parseAudioJobResults(res)
            );
            setIsFinished(true);
            setTranscribeDuration(counter);
            setResults({
              ...parsedResults,
              tdoIdQuery,
              jobIdQuery,
              transcribeDuration: counter,
            });
            setObject(parsedResults.found);
          });
        } else if (counter >= API_TIMEOUT_DURATION) {
          clearInterval(poll);
          console.log(
            "The API engine did not finish before timeout. Displaying error."
          );
          setIsReqTimedOut(true);
          setIsRunning(false);
          setIsFinished(false);
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
            initiateTranscribeJob();
          }}
        />
      );
    } else {
      return (
        <UploadButton
          labelText="Upload Audio"
          isTestMode={isTestMode}
          setTestFile={setTestFile}
        />
      );
    }
  };
  return (
    <>
      <Header />
      <div
        className="transcribe-container"
        data-test-id="transcribe-container"
        style={formContainerStyles}
      >
        <ActionPanel
          className="upload-audio-panel"
          testId="upload-audio-panel"
          description={file?.getUrl ? file?.name : "Detect Game Console"}
          isEnabled
          image="./assets/img/add-audio.png"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {file.getUrl ? <AudioPlayer audioSource={file.getUrl} /> : null}
            {!isFinished && !isRunning && renderActionButton()}
          </div>
        </ActionPanel>
        {isRunning && !isFinished && !isReqTimedOut ? (
          <TranscriptLoader />
        ) : null}
        {isFinished ? (
          <TranscriptResultsDisplay results={results} isTestMode={isTestMode} />
        ) : null}
        {isReqTimedOut && !isRunning ? <TranscriptTimeoutError /> : null}
        {isInvalidFileType && <InvalidFileTypeError />}
      </div>
    </>
  );
};

export default TranscribeContainer;
