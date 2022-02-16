// This file uses patterns & code inspiration from Mert's hotdog-app project.
// Thank you Mert!

import { token, VERITONE_ENVIRONMENT_GQL_URL } from "../../config";
import { ENGINE_TRANSCRIPTION_ID } from "./engineId";

const headers = {
  "Content-Type": "application/json",
  Authorization: token ? `Bearer ${token}` : "",
};

export const launchSingleEngineJobMutation = (uploadUrl) => {
  if (!uploadUrl) {
    throw new Error("Cannot launch job without uploadUrl");
  }
  return {
    queryString: `mutation launchJob {
        launchSingleEngineJob(
          input: {
            uploadUrl: "${uploadUrl}"
            engineId: "${ENGINE_TRANSCRIPTION_ID}"
            clusterId: "rt-9d7a5d1b-ffe0-4d71-a982-190522cdf272"
          }
        ) {
          id
          targetId
          status
        }
      }`,
    uploadUrl,
  };
};
export const tdoStatusQuery = (tdoId) => {
  return {
    queryString: `query tdoJobStatus {
        temporalDataObject(id: "${tdoId}") {
          jobs {
            records {
              id
              status
            }
          }
        }
      }`,
    tdoId,
  };
};

export const engineResultsQuery = (jobId) => {
  return {
    queryString: `query engineResultsFromTDOJobId {
            engineResults(jobId: "${jobId}") {
              records {
                engineId
                jsondata
                stopOffsetMs
              }
            }
          }`,
    jobId,
  };
};
export const postGraphQlQuery = async (query) => {
  try {
    const response = await window.gql(query.queryString);

    console.log("Response from GraphQL:", response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
