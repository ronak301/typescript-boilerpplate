import axios from 'axios';

import { getAsObservable } from 'api/utils';

export const fetchExample = (id: number | string) =>
  axios.get(`backend://users/${id}`);

export const fetchExampleAsObservable = (id: number | string) =>
  getAsObservable(`backend://users/${id}`);
