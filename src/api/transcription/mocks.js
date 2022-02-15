export const mockAudioCreateJobResponse = `{
    "data": {
      "launchSingleEngineJob": {
        "id": "22020715_Tb2LaLMX0M",
        "targetId": "1930044222",
        "status": "pending"
      }
    }
  }`;
export const mockAudioEngineResultsResponse = `{
  "data": {
    "engineResults": {
      "records": [
        {
          "engineId": "c0e55cde-340b-44d7-bb42-2e0d65e98255",
          "jsondata": {
            "sourceEngineId": "c0e55cde-340b-44d7-bb42-2e0d65e98255",
            "taskId": "22020714_9AUuWtC4idCZ6z2",
            "internalTaskId": "90b59c64-48d0-457b-97de-1119b5d6a5df",
            "generatedDateUTC": "2022-02-14T21:25:44.963586425Z",
            "series": [
              {
                "startTimeMs": 1020,
                "stopTimeMs": 1290,
                "words": [
                  {
                    "word": "This",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 1290,
                "stopTimeMs": 1410,
                "words": [
                  {
                    "word": "is",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 1410,
                "stopTimeMs": 1470,
                "words": [
                  {
                    "word": "a",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 1470,
                "stopTimeMs": 1950,
                "words": [
                  {
                    "word": "test",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 1950,
                "stopTimeMs": 1950,
                "words": [
                  {
                    "word": ",",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 2450,
                "stopTimeMs": 3240,
                "words": [
                  {
                    "word": "Xbox",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 3240,
                "stopTimeMs": 3240,
                "words": [
                  {
                    "word": ",",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 4590,
                "stopTimeMs": 4910,
                "words": [
                  {
                    "word": "video",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 4920,
                "stopTimeMs": 5430,
                "words": [
                  {
                    "word": "games",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 6150,
                "stopTimeMs": 6720,
                "words": [
                  {
                    "word": "testing",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              },
              {
                "startTimeMs": 6720,
                "stopTimeMs": 6720,
                "words": [
                  {
                    "word": ".",
                    "confidence": 1,
                    "bestPath": true,
                    "utteranceLength": 1
                  }
                ],
                "language": "en"
              }
            ],
            "modifiedDateTime": 1644873981000
          },
          "stopOffsetMs": 6720
        }
      ]
    }
  }
}`;
export const mockAudioTdoStatusResponse = `
{
  "data": {
    "temporalDataObject": {
      "jobs": {
        "records": [
          {
            "id": "22020714_9AUuWtC4id",
            "status": "complete"
          }
        ]
      }
    }
  }
}`;
