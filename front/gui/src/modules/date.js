import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';

const CHANGE_DATE = 'date/CHANGE_DATE';

export const changeDate = createAction(CHANGE_DATE);

const initialState = {
  date: moment().format('YYYY-MM-DD'),
};

const date = handleActions(
  {
    [CHANGE_DATE]: (state, action) => ({ ...state, date: action.payload }),
  },
  initialState
);

export default date;
