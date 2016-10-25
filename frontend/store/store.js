import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer.js';



const preloadedState = {
    notes: []
};

const configureStore = () => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;
