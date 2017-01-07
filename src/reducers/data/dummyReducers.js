import { handleActions } from 'redux-actions';
import { DummyState } from '../../constants/model';

/*
 * Handle all actions
 * */
const dummyReducers = handleActions({
	CHANGE_MESSAGE: (state, { payload }) => {
		return state.set('message', payload);
	}
}, DummyState);

export default dummyReducers
