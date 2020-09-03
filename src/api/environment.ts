import { isLocalhost } from 'utils';

interface ApiEnvironment {
  apiUrl?: string;
}

const apiEnvironment: ApiEnvironment = {};

switch (true) {
  case isLocalhost():
    apiEnvironment.apiUrl = 'https://jsonplaceholder.typicode.com/';
    break;

  default:
    apiEnvironment.apiUrl = 'https://jsonplaceholder.typicode.com/';
}

export default apiEnvironment;
