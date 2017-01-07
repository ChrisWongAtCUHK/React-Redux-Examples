import { connect } from 'react-redux';
import Main from '../components/Main';

import { changeMessage } from '../actions';

export default connect(
		(state) => ({
			message: state.getIn(['dummyReducers', 'message'])
		}),
		(dispatch) => ({
			onChangeMessage: (event) => {
				dispatch(changeMessage(event.target.value));							 
			}
		})
)(Main);
