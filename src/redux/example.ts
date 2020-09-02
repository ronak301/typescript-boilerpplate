import { createSelector } from 'reselect';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { of, from } from 'rxjs';

import { fetchGunnarx2 } from 'api/example';

// Constants
const TOGGLE_ACTIVE = 'example/TOGGLE_ACTIVE';
const FETCH_GUNNARX2_START = 'example/FETCH_GUNNARX2_START';
const FETCH_GUNNARX2_SUCCESS = 'example/FETCH_GUNNARX2_SUCCESS';
const FETCH_GUNNARX2_ERROR = 'example/FETCH_GUNNARX2_ERROR';

// Types
interface Gunnarx2Data {
  readonly data: {
    // eslint-disable-next-line camelcase
    avatar_url: string;
    url: string;
  };
}

interface Action {
  readonly type: string;
  readonly payload: Gunnarx2Data | boolean;
}

interface State {
  readonly active: boolean;
  readonly gunnarx2: {
    data: Gunnarx2Data | null;
    loading: boolean;
    error: boolean;
  };
}

// Selectors
export const selectExample = (state: { example: State }) => state.example;

export const selectActive = createSelector(
  [selectExample],
  ({ active }) => active
);

export const selectGunnarx2 = createSelector(
  [selectExample],
  ({ gunnarx2 }) => gunnarx2
);

// Actions
export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
});

export const fetchGunnarx2Start = () => ({
  type: FETCH_GUNNARX2_START
});

export const fetchGunnarx2Success = (data: Gunnarx2Data) => ({
  type: FETCH_GUNNARX2_SUCCESS,
  payload: data
});

export const fetchGunnarx2Error = (error: boolean) => ({
  type: FETCH_GUNNARX2_ERROR,
  payload: error
});

// Reducers
const initialState = {
  active: false,
  gunnarx2: {
    data: null,
    loading: false,
    error: false
  }
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {
        ...state,
        active: !state.active
      };
    case FETCH_GUNNARX2_START:
      return {
        ...state,
        gunnarx2: {
          ...state.gunnarx2,
          data: {},
          loading: true,
          error: false
        }
      };
    case FETCH_GUNNARX2_SUCCESS:
      return {
        ...state,
        gunnarx2: {
          ...state.gunnarx2,
          data: action.payload,
          loading: false,
          error: false
        }
      };
    case FETCH_GUNNARX2_ERROR:
      return {
        ...state,
        gunnarx2: {
          ...state.gunnarx2,
          data: {},
          loading: false,
          error: true
        }
      };
    default:
      return state;
  }
};

// Epics
const testEpic: Epic<Action, Action, State> = (action$) =>
  action$.pipe(
    ofType(FETCH_GUNNARX2_START),
    switchMap(() =>
      from(fetchGunnarx2()).pipe(
        map((response) => fetchGunnarx2Success(response)),
        catchError((error) => of(fetchGunnarx2Error(error)))
      )
    )
  );

export const exampleEpics = [testEpic];
