import { handleActions } from 'redux-actions';
import { DummyState } from '../../constants/model';

/*
 * Handle all actions
 * */
const dummyReducers = handleActions({
	CHANGE_MODE: (state, { payload }) => {
		return state.get('config');
	}
}, DummyState);

export default dummyReducers
