import { combineReducers } from 'redux-immutable';
import dummyReducers from './data/dummyReducers';

const rootReducer = combineReducers({dummyReducers});

export default rootReducer;
