import { createSelector } from 'reselect';

// Constants
const TOGGLE_ACTIVE = 'example/TOGGLE_ACTIVE';

// Types
interface Action {
  readonly type: string;
}

interface State {
  readonly active: boolean;
}

// Selectors
export const selectExample = (state: { example: State }) => state.example;

export const selectActive = createSelector(
  [selectExample],
  ({ active }) => active
);

// Actions
export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
});

// Reducers
const initialState = {
  active: false
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {
        ...state,
        active: !state.active
      };
    default:
      return state;
  }
};
