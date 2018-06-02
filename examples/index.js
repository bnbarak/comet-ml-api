const CometMlAPI = require('../lib');

const apiKey = 'oUZdKbWfFGEuX3AMHaptCCXrl';
const cometMl = new CometMlAPI(apiKey, 'v1');
const projectId = '173a1ea5de2246b49827dac1cf13d715';
const someExperimentKey = 'c874d6f369034bfb846e611f345f06e2';


console.log(cometMl.getVersion());

cometMl.projects().then((response) => {
  console.log('projects', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experiments(projectId).then((response) => {
  console.log('experiments', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentHtml(someExperimentKey).then((response) => {
  console.log('experimentHtml', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentCode(someExperimentKey).then((response) => {
  console.log('experimentCode', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentStdout(someExperimentKey).then((response) => {
  console.log('experimentStdout', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentInstalledPackages(someExperimentKey).then((response) => {
  console.log('experimentInstalledPackages', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentGraph(someExperimentKey).then((response) => {
  console.log('experimentGraph', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentImages(someExperimentKey).then((response) => {
  console.log('experimentImages', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentParams(someExperimentKey).then((response) => {
  console.log('experimentParams', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentMetrics(someExperimentKey).then((response) => {
  console.log('experimentMetrics', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentLogOther(someExperimentKey).then((response) => {
  console.log('experimentLogOther', response);
}).catch((e) => {
  console.log(e);
});

cometMl.experimentMetricsRaw(someExperimentKey).then((response) => {
  console.log('experimentMetricsRaw', response);
}).catch((e) => {
  console.log(e);
});
