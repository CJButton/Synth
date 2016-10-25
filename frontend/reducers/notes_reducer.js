import {KEY_PRESSED, KEY_RELEASED} from '../actions/notes_actions.js';
import { NOTE_NAMES } from '../util/tones.js';
import merge from 'lodash/merge';

const _defaultState = [];

export const notesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge([], state);

  switch(action.type) {
    case KEY_PRESSED:
      if (NOTE_NAMES.includes(action.key)) {
        return [...newState, action.key];
      }
      return state;
    case KEY_RELEASED:
    
      if (state.includes(action.key)){
        let idx = state.indexOf(action.key);
        newState.splice(idx,1);
      }
      return newState;
    default:
      return state;
  }
};

// export default notesReducer;
