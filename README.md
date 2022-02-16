# Xbox or PlayStation Detector

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to launch this project

1. Open `/src/config.js` and set your aiware session token, save the file

2. run npm start inside tony-onboarding root directory

3. Navigate your browser to localhost:3000

## How to use the web app

The main screen presents a panel with two engine selections, either Transcription or Recognition. Transcription expects an audio file and will detect if the words "xbox" or "playstation" are present in the file. Once the user uploads a file, they can press scan and if `enableMockApiResponse` is set to false in config, a real `launchSingleEngineJob` mutation is ran on the Veritone environment using the engineId and clusterId: `initialTranscriptionEngineId` and `initialClusterId`, both located in `src/config.js`.

## Notice on Recognition Engine

The Recognition feature is a proof of concept and does not support real API Engine jobs at this time. You may test the cases by uploading an image file with "xbox" or "playstation" inside the name of the file to present the result. A file without such name with present the no-match case.

## What technology is used

This project was created with React's `npx create-react-app`, @Veritone's `aiwarejs-vanilla-boilerplate`, and an external graphQL library for fetching data. Animations are either css based or animated .gif/.webp image files. Animations are located inside the `/public/css/app.css` file. A global config file is used to enable or disable a few helpful settings.
