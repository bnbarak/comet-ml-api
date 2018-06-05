# Node.js SDK for Comet.ml

Based on the supercharge machine learning library [comet.ml](comet.ml)

## Documentation
See Comet.ml API [documentation](https://staging.comet.ml/docs/rest-api/endpoints/)

## Installation
`npm install comet-ml-api`


## Example
```
const CometMlAPI = require('comet-ml-api');

const apiKey = 's9ILl8ox92nZSTVh8eo4B47LC';
const cometMl = new CometMlAPI(apiKey, 'v1');

cometMl.projects().then((response) => {
  console.log(response);
}).catch(e => {
  console.log(e);
});
```

## API
### Projects
```
cometMl.projects().then((response) => {})
```
### Experiments
```
cometMl.experiments(projectId).then((response) => {})
```
### HTML
```
cometMl.experimentHtml(someExperimentKey).then((response) => {})
```
### Code
```
cometMl.experiments(projectId).then((response) => {})
```
### Stdout
```
cometMl.experimentStdout(someExperimentKey).then((response) => {})
```
### Installed Packages
```
cometMl.experimentInstalledPackages(someExperimentKey).then((response) => {})
```
### Graph Definition
```
cometMl.experimentGraph(someExperimentKey).then((response) => {})
```
### Images
```
cometMl.experimentImages(someExperimentKey).then((response) => {})
```
### Hyper Params
```
cometMl.experimentParams(someExperimentKey).then((response) => {})
```
### Metrics
```
cometMl.experimentMetrics(someExperimentKey).then((response) => {})
```
### Log Other
```
cometMl.experimentLogOther(someExperimentKey).then((response) => {})
```
### Raw Metrics
```
cometMl.experimentMetricsRaw(someExperimentKey).then((response) => {})
```

