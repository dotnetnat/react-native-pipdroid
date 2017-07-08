import type {Action } from '../actions/types';
import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/login';
import {AsyncStorage} from 'react-native';

export type State = {
  isLoggedIn: boolean,
  token: string,
  msg: string,
  attempting: boolean
};

const initialState = {
  isLoggedIn: false,
  token: '',
  msg: null,
  isAttempting: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return Object.assign({}, state, {isAttempting: true, isLoggedIn: false, msg: null, userinfo: action.payload});
    case LOGIN_SUCCESS:
      AsyncStorage.setItem("token", action.payload.user.token);
      return Object.assign({}, state, {isAttempting: false, isLoggedIn: true, msg: action.payload.msg});
    case LOGIN_FAILED:
      return Object.assign({}, state, {isAttempting: false, isLoggedIn: false, msg: action.payload.msg});
    default:
      return state;
	}
}