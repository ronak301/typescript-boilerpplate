import { AxiosRequestConfig } from 'axios';

import environment from 'api/environment';

export const apiUriInterceptor = (request: AxiosRequestConfig) => {
  if (request?.url?.startsWith('backend://') && environment.apiUrl) {
    request.url = request.url.replace('backend://', environment.apiUrl);
  }

  return request;
};
