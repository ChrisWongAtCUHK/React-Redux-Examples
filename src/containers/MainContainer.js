import { connect } from 'react-redux';
import Main from '../components/Main';

import { showMessage } from '../actions';

export default connect(
		(state) => ({
			message: state.getIn(['dummyReducers', 'message'])
		}),
		(dispatch) => ({
			onShowMessage: () => () => {
				dispatch(showMessage());							 
			}
		})
)(Main);
