import request from 'request-promise';

export const END_POINTS = {
  projects: 'projects',
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

export const BASE_URL = { v1: 'https://www.comet.ml/api/rest/v1/' };
export const DEFAULT_VERSION = 'v1';
export const COMET_HEADER = 'Authorization';

export const baseUrl = version => BASE_URL[version];
export const getEndPoint = endPoint => END_POINTS[endPoint];

export const generateRequestUri = ({ endPoint, version }) => {
  const endPointValue = getEndPoint(endPoint);
  const url = `${baseUrl(version)}${endPointValue}`;
  return url;
};

export const getRequest = ({ endPoint, params, version, apiKey }) => {
  const uri = generateRequestUri({ endPoint, version });
  const options = {
    uri,
    qs: params,
    headers: { [COMET_HEADER]: apiKey },
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

