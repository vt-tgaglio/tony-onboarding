// Configuration file for tony-onboarding
// --------------------------------------
//
export const placeholderUploadedImageSrc =
  "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/13-0-395_0b7bf680-e9f8-4420-86dc-40037b3f4a90?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220210T135800Z&X-Amz-Expires=86400&X-Amz-Signature=f118c3cbf39c4293556b456cf8ca2762f1b398177b8a4de16960ac43e42ff397&X-Amz-SignedHeaders=host";
export const token = "7f45ebd1-f041-4213-826b-c728cf5c03ef"; // AiWARE.js auth token
export const enableAutoUploadClicks = true; // When true, Importer auto clicks dimiss importer panel after upload
// Recognition Configs
export const mockProgressSpeed = 250; // Higher value, slower progress time
export const initialIsScanning = false; // When true, app loads into scanning view
export const initialIsDone = false; // When true, app loads into done view
export const initialObjectDetected = null;
// -----------------------------------------------------------------------
// Transcription Configs
export const initialEngine = null;
export const MATCH_WORDS = ["xbox", "playstation"];
// -----------------------------------------------------------------------
// API configs
export const VERITONE_ENVIRONMENT_GQL_URL =
  "https://api.stage.us-1.veritone.com/v3/graphql";
export const enableMockApiResponse = true;
export const API_TIMEOUT_DURATION = 1000 * 30; // 30 seconds to complete job
export const API_POLL_FREQUENCY = 3500; // How freqeunt the API calls to check status
export const initialFileValue = { url: "testurl", file: { name: "xbox1.jpg" } };
export const initialClusterId = "rt-9d7a5d1b-ffe0-4d71-a982-190522cdf272"; // uses STAGE cluster
export const initialRecognitionEngineId = ""; // None are working lol
export const initialTranscriptionEngineId =
  "c0e55cde-340b-44d7-bb42-2e0d65e98255"; // Speechmatics Transcription (v7) - English (Global) V3
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
