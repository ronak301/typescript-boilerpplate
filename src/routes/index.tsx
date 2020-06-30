import { lazy } from 'react';

export default {
  Home: lazy(() => import('./Home')),
  Grid: lazy(() => import('./Grid')),
  NotFound: lazy(() => import('./NotFound'))
};
