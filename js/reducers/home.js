import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

const initialState = {
  msg: null,
  launches: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_LAUNCHES_SUCCESS':
      return Object.assign({}, state, {launches: action.payload});
    case 'CHANGE_STATUS_SUCCESS':
      return Object.assign({}, state, {launches: action.payload});
    default:
      return state;
	}
}