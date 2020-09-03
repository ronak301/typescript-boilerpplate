import { lazy } from 'react';

export default {
  Home: lazy(() => import('./Home')),
  Grid: lazy(() => import('./Grid')),
  Form: lazy(() => import('./Form')),
  NotFound: lazy(() => import('./NotFound'))
};
