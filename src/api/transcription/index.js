import {
  enableMockApiResponse,
  MATCH_WORDS,
  TRANSCRIPT_FILE_TYPE_ALLOWED,
} from "../../config";
import { CLUSTER_ID } from "../common/clusterId";
import { ENGINE_TRANSCRIPTION_ID } from "../common/engineId";
import {
  engineResultsQuery,
  launchSingleEngineJobMutation,
  postGraphQlQuery,
  tdoStatusQuery,
} from "../common/query";
import {
  mockAudioCreateJobResponse,
  mockAudioEngineResultsResponse,
  mockAudioTdoStatusResponse,
} from "./mocks";

export const createAudioJob = async (file, isTestMode) => {
  console.log(`
    CREATE NEW AUDIO JOB
    -> Starting Audio Transcription Job.
    | clusterId: ${CLUSTER_ID}
    | engineId:  ${ENGINE_TRANSCRIPTION_ID}
    | file:      ${file?.file?.name}
    | getURL:    ${file?.getUrl}
    | --------------------------------
    `);
  console.log("File provided:");
  console.log(file);
  const { type } = file.file;
  if (!TRANSCRIPT_FILE_TYPE_ALLOWED.includes(type)) {
    return new Error("File type not allowed");
  }
  if (isTestMode || enableMockApiResponse) {
    return JSON.parse(mockAudioCreateJobResponse);
  } else {
    if (!file) {
      throw new Error("Invalid or no file");
    }
    const uploadUrl = file?.getUrl;
    console.log("sending MUTATION POST request....");
    const launchJobQuery = launchSingleEngineJobMutation(uploadUrl);
    const data = await postGraphQlQuery(launchJobQuery);
    return data;
  }
};
export const getAudioJobStatus = async (tdoId, jobId, isTestMode) => {
  let data;

  if (isTestMode || enableMockApiResponse) {
    data = JSON.parse(mockAudioTdoStatusResponse);
  } else {
    const jobStatusQuery = tdoStatusQuery(tdoId);
    data = await postGraphQlQuery(jobStatusQuery);
  }
  console.log(`
    POLL JOB STATUS
    -> Fetching temporalDataObject Job Status.
    | jobId:     ${jobId}
    | tdoId:     ${tdoId}
    | clusterId: ${CLUSTER_ID}
    | engineId:  ${ENGINE_TRANSCRIPTION_ID}
    | --------------------------------
    | STATUS: ${data?.data?.temporalDataObject?.jobs?.records[0].status}
    | --------------------------------
    `);
  return data;
};

export const getAudioJobResults = async (jobId, isTestMode) => {
  console.log(`
    AUDIO JOB COMPLETE
    -> Fetching engineResults for Job.
    | jobId:     ${jobId}
    | clusterId: ${CLUSTER_ID}
    | engineId:  ${ENGINE_TRANSCRIPTION_ID}
    | --------------------------------
    `);
  if (isTestMode || enableMockApiResponse) {
    return JSON.parse(mockAudioEngineResultsResponse);
  } else {
    console.log("sending POST request....");
    const engineStatusQuery = engineResultsQuery(jobId);
    const data = await postGraphQlQuery(engineStatusQuery);
    console.log("Response received");
    return data;
  }
};

export const parseAudioJobResults = (response) => {
  const { series } = response.data.engineResults.records[0].jsondata;
  const words = [];
  series.forEach((word) => {
    words.push(word?.words[0]?.word);
  });
  return words
    .join(" ")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .trim();
};

export const generateAudioJobResults = (text) => {
  const textWordArray = text.toLowerCase().split(" ");
  const results = {
    found: null,
    text,
    length: textWordArray.length,
  };

  for (let word of textWordArray) {
    if (results.found) continue;
    if (MATCH_WORDS.includes(word)) {
      results.found = word;
    }
  }
  console.log(`
  GENERATING JOB RESULTS
  -> Mapped results array.
  | text         : "${text}"
  | MATCH_WORDS  : [ ${MATCH_WORDS.join(", ")} ]
  | isMatchFound?: ${results.found !== null}
  | found        : ${results.found}
  | wordCount    : ${results.length}
  | --------------------------------
  `);
  return results;
};
