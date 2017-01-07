import { createAction } from 'redux-actions';
import { SHOW_MESSAGE } from '../constants/actionTypes';

export const showMessage = createAction(SHOW_MESSAGE);
