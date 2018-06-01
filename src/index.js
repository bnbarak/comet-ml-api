import {BASE_URL, DEFAULT_VERSION, getRequest, END_POINTS} from "./utils"

const lib = class CometMlAPI {
  constructor(apiKey, version) {
    this.apiKey = apiKey;
    this.version = BASE_URL[version] ? version : DEFAULT_VERSION;
  }

  getVersion() {
    return this.version;
  }

  projects() {
    const endPoint = END_POINTS.project;
    const params = {};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experiments(projectId) {
    const endPoint = END_POINTS.experiments;
    const params = {projectId};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentHtml(experimentKey) {
    const endPoint = END_POINTS['experiment/html'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentCode(experimentKey) {
    const endPoint = END_POINTS['experiment/code'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentStdout(experimentKey) {
    const endPoint = END_POINTS['experiment/stdout'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentInstalledPackages(experimentKey) {
    const endPoint = END_POINTS['experiment/installed-packages'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentGraph(experimentKey) {
    const endPoint = END_POINTS['experiment/graph'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentImages(experimentKey) {
    const endPoint = END_POINTS['experiment/images'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentParams(experimentKey) {
    const endPoint = END_POINTS['experiment/params'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentMetrics(experimentKey) {
    const endPoint = END_POINTS['experiment/metrics'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentLogOther(experimentKey) {
    const endPoint = END_POINTS['experiment/log-other'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

  experimentMetricsRaw(experimentKey) {
    const endPoint = END_POINTS['experiment/metrics-raw'];
    const params = {experimentKey};
    const { version, apiKey } = this;
    return getRequest({ endPoint, params, version, apiKey });
  }

};

module.exports = lib;

