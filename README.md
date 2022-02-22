<br />
<p align="center">
  <img src="./static/logo.png" />
</p>
<br />

# Xbox or PlayStation Detector

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to launch this project

1. Open `/src/token.js` and set your aiware session token, save the file

2. run `npm install` inside tony-onboarding root directory

3. run `npm start` inside tony-onboarding root directory

4. Navigate your browser to localhost:3000

## How to run tests after install

1. Open `/src/token.js` and set your aiware session token, save the file

2. Run `npm run cypress`

3. Choose a spec to run from the Cypress window

## How to use the web app

The main screen presents a panel with two engine selections, either Transcription or Recognition.

Transcription expects an audio file and will detect if the words "xbox" or "playstation" are present in the file.

Once the user uploads an audio file, they can press scan.

If `enableMockApiResponse` is set to false in config, a real `launchSingleEngineJob` mutation is ran on the Veritone environment using the app config's engineId and clusterId.

Constants `initialTranscriptionEngineId` and `initialClusterId` are both located in `src/config.js`.

## Sample Media

You can use the provided audio and image samples located inside `/samples` to demo the working transcription ui flows or the simulated recognition ui flows.

## Veritone Environment

This project uses the stage veritone environment. This is configurable inside the `/src/config.js` file.

## Notice on Recognition Engine

The Recognition feature is a proof of concept and does not support real API Engine jobs at this time. You may test the cases by uploading an image file with "xbox" or "playstation" inside the name of the file to present the result. A file without such name will present the no-match case.

## What technology is used

This project was created via React's `npx create-react-app`, `@veritone/aiwarejs-vanilla-boilerplate`, and an external graphQL library for fetching data.

Animations are either css based or animated .gif/.webp image files. Animations are located inside the `/public/css/app.css` file. A global config file is used to enable or disable a few helpful settings.
