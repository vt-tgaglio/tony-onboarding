// -----------------------------------------------------------------------
// Configuration file for tony-onboarding
import { userToken } from "./token"; // App won't work without a valid Veritone Session Id
// -----------------------------------------------------------------------
export const token = userToken; // AiWARE.js auth token
export const placeholderUploadedImageSrc = "https://i.imgur.com/jQE8C5B.png";
export const enableAutoUploadClicks = true; // When true, Importer auto clicks dimiss importer panel after upload
// Recognition Configs
export const mockProgressSpeed = 250; // Higher value, slower progress time
export const initialIsScanning = false; // When true, Recognition Engine loads into scanning view
export const initialIsDone = false; // When true, Recognition Engine loads into done view
export const initialObjectDetected = null;
// -----------------------------------------------------------------------
// Transcription Configs
export const initialEngine = null;
export const initialResults = {
  found: null,
  text: "",
  length: 0,
  tdoIdQuery: "",
  jobIdQuery: "",
};
export const MATCH_WORDS = ["xbox", "playstation"];
export const TRANSCRIPT_FILE_TYPE_ALLOWED = ["audio/x-m4a", "audio/mpeg"];
// -----------------------------------------------------------------------
// API configs
export const VERITONE_ENVIRONMENT_GQL_URL =
  "https://api.stage.us-1.veritone.com/v3/graphql";
export const VERITONE_ENVIRONMENT_NAME = (() => {
  if (VERITONE_ENVIRONMENT_GQL_URL.includes("api.stage.us-1")) return "STAGE";
  if (VERITONE_ENVIRONMENT_GQL_URL.includes("api.us-1")) return "PROD";
  if (VERITONE_ENVIRONMENT_GQL_URL.includes("api.dev.us-1")) return "DEV";
  return "UNKNOWN! - Check GQL-URL!";
})();
export const enableMockApiResponse = !true;
export const API_TIMEOUT_DURATION = enableMockApiResponse
  ? 5000 // Timeout using mock
  : 1000 * 60 * 15; // Timeout to complete job
export const API_POLL_FREQUENCY = 3500; // How freqeunt the API calls to check status
export const API_MOCK_JOB_STATUS = "complete";
export const initialFileValue = { url: "testurl", file: { name: "xbox1.jpg" } };
export const initialClusterId = "rt-9d7a5d1b-ffe0-4d71-a982-190522cdf272"; // uses STAGE cluster
export const initialRecognitionEngineId = ""; // None are working yet lol
export const initialTranscriptionEngineId =
  "c0e55cde-340b-44d7-bb42-2e0d65e98255";
export const ENGINE_NAME_TRANSCRIPTION =
  "Speechmatics Transcription (v7) - English (Global) V3";
export const initialScanResults = {
  data: {
    engineResults: {
      records: [
        {
          jsonData: {},
        },
      ],
    },
  },
};
