import { createStore, combineReducers } from 'redux';

import { reducers } from './reducers';
import { isSSR, isProduction } from 'utils';

const rootReducer = combineReducers({
  ...reducers
});

let composeEnhancers;
if (!isSSR) {
  composeEnhancers = !isProduction
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
    : undefined;
}

export const store = createStore(rootReducer, composeEnhancers);
