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
export const testModeAudioFile = {
  id: "c776c85d-7796-45e7-b966-1d239878ed4c",
  fileUrl: "blob:http://localhost:3000/218e9e95-4908-48c0-9285-cea24622173f",
  name: "test-ps.mp3",
  size: 166959,
  type: "audio/mpeg",
  percentComplete: 0,
  expiresInSeconds: 86400,
  getUrl:
    "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/14-29-928_3797c4b1-5065-475e-b948-66d9f174b585?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220222T140429Z&X-Amz-Expires=86400&X-Amz-Signature=4d8acc8a55ac9aa9a5752121a05237d7c47770118e657bccf5c412c3a68320ee&X-Amz-SignedHeaders=host",
  key: "7682/other/2022/1/2/_/14-29-928_3797c4b1-5065-475e-b948-66d9f174b585",
  unsignedUrl:
    "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/14-29-928_3797c4b1-5065-475e-b948-66d9f174b585",
  url: "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/14-29-928_3797c4b1-5065-475e-b948-66d9f174b585?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220222T140429Z&X-Amz-Expires=86400&X-Amz-Signature=65412e611dcbaa3c2a403626af7d3efa4ada472da2aa68208dba0e4256f19fc0&X-Amz-SignedHeaders=host",
};

export const testModeImageFile = {
  id: "fe1be220-cbd6-46f6-be29-aee77533d0f8",
  fileUrl: "blob:http://localhost:3000/2bebc105-a351-4860-899f-96191dcb8044",
  name: "playstation2.jpg",
  size: 14150,
  type: "image/jpeg",
  percentComplete: 0,
  expiresInSeconds: 86400,
  getUrl:
    "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/13-2-549_04c11d2f-67a8-4dc0-b6f5-322c88bdf9b8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220222T135202Z&X-Amz-Expires=86400&X-Amz-Signature=d1cc4238e50492c89c9327c83e7f113c1994cc5523934c6b50e31cf53acb9f2a&X-Amz-SignedHeaders=host",
  key: "7682/other/2022/1/2/_/13-2-549_04c11d2f-67a8-4dc0-b6f5-322c88bdf9b8",
  unsignedUrl:
    "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/13-2-549_04c11d2f-67a8-4dc0-b6f5-322c88bdf9b8",
  url: "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/13-2-549_04c11d2f-67a8-4dc0-b6f5-322c88bdf9b8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220222T135202Z&X-Amz-Expires=86400&X-Amz-Signature=39f896f044877990e4bac8b3fd971a981fd68546680d70eab60ca705e5d73647&X-Amz-SignedHeaders=host",
};

// Old test file objects
//
// export const testModeAudioFile = {
//   id: "1ddfee6a-54de-4808-becb-502b763ee6a3",
//   file: {
//     lastModified: 1644948395519,
//     lastModifiedDate: new Date(
//       "Tue Feb 15 2022 13:06:35 GMT-0500 (Eastern Standard Time)"
//     ),
//     name: "test-ps-2.m4a",
//     size: 69489,
//     type: "audio/x-m4a",
//     webkitRelativePath: "",
//   },
//   percentComplete: 0,
//   expiresInSeconds: 86400,
//   getUrl:
//     "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/17-32-305_e903a6e9-2446-4be5-a486-8f583619fba6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220217T173732Z&X-Amz-Expires=86400&X-Amz-Signature=c0783bf7582e0e086e8029f11706e2002b2536f6b6ca03cb26a900253aeb5ad8&X-Amz-SignedHeaders=host",
//   key: "7682/other/2022/1/4/_/17-32-305_e903a6e9-2446-4be5-a486-8f583619fba6",
//   unsignedUrl:
//     "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/17-32-305_e903a6e9-2446-4be5-a486-8f583619fba6",
//   url: "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/17-32-305_e903a6e9-2446-4be5-a486-8f583619fba6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220217T173732Z&X-Amz-Expires=86400&X-Amz-Signature=3658418c39b0a8d0bb4579069d188e565f5fc79e9179ba31e21fcd73629e9e69&X-Amz-SignedHeaders=host",
// };

// export const testModeImageFile = {
//   id: "87b12dae-9f0c-4909-8155-b4647b7b2aaf",
//   file: {
//     lastModified: 1644427322797,
//     lastModifiedDate: new Date(
//       "Wed Feb 09 2022 12:22:02 GMT-0500 (Eastern Standard Time)"
//     ),
//     name: "playstation2.jpg",
//     size: 14150,
//     type: "image/jpeg",
//     webkitRelativePath: "",
//   },
//   percentComplete: 0,
//   expiresInSeconds: 86400,
//   getUrl:
//     "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/17-9-348_060bd7a9-f1cf-418f-9b0a-e5af73f3e571?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220217T171209Z&X-Amz-Expires=86400&X-Amz-Signature=62fe628c2c458c1919e1c50c1ae017b28d9abd48a92444099aa3a780ea59057f&X-Amz-SignedHeaders=host",
//   key: "7682/other/2022/1/4/_/17-9-348_060bd7a9-f1cf-418f-9b0a-e5af73f3e571",
//   unsignedUrl:
//     "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/17-9-348_060bd7a9-f1cf-418f-9b0a-e5af73f3e571",
//   url: "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/17-9-348_060bd7a9-f1cf-418f-9b0a-e5af73f3e571?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220217T171209Z&X-Amz-Expires=86400&X-Amz-Signature=e9df7366428341abc8875121c99bc10c7d4b7bfc1a948dc5a66de2485918aa65&X-Amz-SignedHeaders=host",
// };
