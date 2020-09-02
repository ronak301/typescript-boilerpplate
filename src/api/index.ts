import axios from 'axios';

import { apiUriInterceptor } from 'api/utils';

export const setupInterceptors = () => {
  axios.interceptors.request.use(apiUriInterceptor);
};
