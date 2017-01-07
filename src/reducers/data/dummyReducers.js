import { handleActions } from 'redux-actions';
import { DummyState } from '../../constants/model';

/*
 * Handle all actions
 * */
const dummyReducers = handleActions({
	SHOW_MESSAGE: (state, { payload }) => {
		return state.set('message', "Don't write Hello World for React.");
	}
}, DummyState);

export default dummyReducers
