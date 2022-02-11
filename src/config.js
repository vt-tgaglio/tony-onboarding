export const placeholderUploadedImageSrc =
  "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/4/_/13-0-395_0b7bf680-e9f8-4420-86dc-40037b3f4a90?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220210T135800Z&X-Amz-Expires=86400&X-Amz-Signature=f118c3cbf39c4293556b456cf8ca2762f1b398177b8a4de16960ac43e42ff397&X-Amz-SignedHeaders=host";
export const token = "9e966ea6-1137-4d55-be9e-9edd2e4e6245"; // Aiware auth token
export const enableAutoUploadClicks = true;
export const mockProgressSpeed = 50;
export const initialIsScanning = false; // When true, app loads into scanning view
export const initialIsDone = false; // When true, app loads into done view
// export const initialObjectDetected = "xbox";
export const initialObjectDetected = null;
export const initialFileValue = { url: "testurl", file: { name: "xbox1.jpg" } };
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
