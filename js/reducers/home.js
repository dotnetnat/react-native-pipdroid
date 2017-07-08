import type {Action } from '../actions/types';
import { LOGOUT, GET_LAUNCHES_REQUEST, GET_LAUNCHES_SUCCESS, GET_LAUNCHES_FAILED } from '../actions/home';
import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

const initialState = {
  msg: null,
  launches: []
};

export default function (state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case GET_LAUNCHES_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {launches: action.payload});
    default:
      return state;
	}
}