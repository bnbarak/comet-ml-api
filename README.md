# Node.js Client for Comet.ml

Based on the supercharge Machine learning library [comet.ml](comet.ml) 

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
### Graph Definision
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
### DefinisMetricsion
```
cometMl.experimentMetrics(someExperimentKey).then((response) => {})
```
### Log Other
```
cometMl.experimentLogOther(someExperimentKey).then((response) => {
```
### Raw Metrics
```
cometMl.experimentMetricsRaw(someExperimentKey).then((response) => {})
```

