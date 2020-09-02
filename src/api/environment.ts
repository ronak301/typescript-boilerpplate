import { isLocalhost } from 'utils';

interface ApiEnvironment {
  apiUrl?: string;
}

const apiEnvironment: ApiEnvironment = {};

switch (true) {
  case isLocalhost():
    apiEnvironment.apiUrl = 'https://api.github.com/';
    break;

  default:
    apiEnvironment.apiUrl = 'https://api.github.com/';
}

export default apiEnvironment;
