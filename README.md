# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Write your query or mutation here

mutation launchJob {
launchSingleEngineJob(
input: { # targetId:""
uploadUrl: "https://s3.amazonaws.com/stage-api.veritone.com/7682/other/2022/1/2/_/1-25-87_14f6c89d-af7e-4bdc-baa7-edd6994bd471?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQMR5VATUHU3MEGOA%2F20220215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220215T013425Z&X-Amz-Expires=86400&X-Amz-Signature=2668e8f024f8df4ae5d3815dd136c2d6fe63f67e495f30025431aa6d334ddd02&X-Amz-SignedHeaders=host"
engineId: "c0e55cde-340b-44d7-bb42-2e0d65e98255"
clusterId: "rt-9d7a5d1b-ffe0-4d71-a982-190522cdf272"
#fields: [
# {
# fieldName: "libraryId"
# fieldValue: "8a0bb949-a751-4f36-bca8-0d66f4df9692"
#}
#{ fieldName: "inputIsImage", fieldValue: "true" }
#]
}
) {
id
targetId
status
}
}

# Get a job's status

query jobStats {
job(id:"22020610_k9FS5ZpB0G"){
id
status
tasks{
records{
engine{
id
name
}
status
failureReason
failureMessage
targetId
}
}
}
}

# Get engine results

query engineResultsFromTDOJobId {
engineResults(jobId: "22020715_Tb2LaLMX0M") {
records {
engineId
jsondata
stopOffsetMs
}
}
}

query tdoJobStatus {
temporalDataObject(id: "1930044222") {
jobs {
records {
id
status
}
}
}
}
