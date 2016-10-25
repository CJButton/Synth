

import {combineReducers} from "redux";
import {notesReducer} from './notes_reducer.js';


const rootReducer = combineReducers({notes: notesReducer});

export default rootReducer;
