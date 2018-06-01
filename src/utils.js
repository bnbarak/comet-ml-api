import request from 'request-promise';

export const END_POINTS = {
  project: 'projects',
  experiments: 'experiments',
  'experiment/html': 'experiment/html',
  'experiment/code': 'experiment/code',
  'experiment/stdout': 'experiment/stdout',
  'experiment/images': 'experiment/images',
  'experiment/graph': 'experiment/graph',
  'experiment/params': 'experiment/params',
  'experiment/metrics': 'experiment/metrics',
  'experiment/log-other': 'experiment/log-other',
  'experiment/metrics-raw': 'experiment/metrics-raw',
  'experiment/installed-packages': 'experiment/installed-packages',
};

export const BASE_URL = {
  v1: 'https://staging.comet.ml/api/rest/v1/',
};
export const DEFAULT_VERSION = 'v1';
export const COMET_HEADER = 'Authorization';

export const baseUrl = (version) => {
  return BASE_URL[version];
};

export const generateRequestUri = ({ endPoint, version }) => {
  const url = `${baseUrl(version)}${endPoint}`;
  return url;
}

export const getRequest = ({ endPoint, params, version, apiKey }) => {
  const uri = generateRequestUri({ endPoint, params, version });
  const options = {
    uri,
    qs: params,
    headers: {
      [COMET_HEADER]: apiKey,
    },
    json: true,
  };
  return new Promise((resolve, reject) => {
    request.get(options).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error.error);
    });
  });
};

export const getEndPoint = (endPoint) => {
  return END_POINTS[endPoint];
}

