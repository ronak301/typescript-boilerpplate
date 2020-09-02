import { combineEpics } from 'redux-observable';

import { exampleEpics } from './example';

export const epics = combineEpics(...exampleEpics);
