import { enableMockApiResponse, MATCH_WORDS } from "../../config";
import { CLUSTER_ID } from "../common/clusterId";
import { ENGINE_TRANSCRIPTION_ID } from "../common/engineId";
import {
  mockAudioCreateJobResponse,
  mockAudioEngineResultsResponse,
  mockAudioTdoStatusResponse,
} from "./mocks";

export const createAudioJob = async (file) => {
  console.log(`
    Starting Audio Transcription Job.
    | clusterId: ${CLUSTER_ID}
    | engineId:  ${ENGINE_TRANSCRIPTION_ID}
    | file:      ${file?.file?.name}
    | getURL:    ${file?.getUrl}
    | --------------------------------
    `);
  if (enableMockApiResponse) {
    return JSON.parse(mockAudioCreateJobResponse);
  }
};
export const getAudioJobStatus = async (tdoId, jobId) => {
  console.log(`
    Fetching temporalDataObject Job Status.
    | jobId:     ${jobId}
    | tdoId:     ${tdoId}
    | clusterId: ${CLUSTER_ID}
    | engineId:  ${ENGINE_TRANSCRIPTION_ID}
    | --------------------------------
    `);
  if (enableMockApiResponse) {
    return JSON.parse(mockAudioTdoStatusResponse);
  }
};

export const getAudioJobResults = async (jobID) => {
  console.log(`
    Fetching engineResults for Job.
    | jobId:     ${jobID}
    | clusterId: ${CLUSTER_ID}
    | engineId:  ${ENGINE_TRANSCRIPTION_ID}
    | --------------------------------
    `);
  if (enableMockApiResponse) {
    return JSON.parse(mockAudioEngineResultsResponse);
  }
};

export const parseAudioJobResults = (response) => {
  const { series } = response.data.engineResults.records[0].jsondata;
  const words = [];
  series.forEach((word) => {
    words.push(word?.words[0]?.word);
  });
  return words.join(" ");
};

export const generateAudioJobResults = (text) => {
  const results = {
    found: null,
    text,
  };
  const textStr = text.split(" ").join("").toLowerCase();
  for (let word of MATCH_WORDS) {
    if (textStr.includes(word)) {
      results.found = word;
      return results;
    }
  }
  return results;
};
