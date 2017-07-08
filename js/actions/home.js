import api from '../apis';
import type { Action } from './types';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

export const LOGOUT = 'LOGOUT';

export const GET_LAUNCHES_REQUEST = 'GET_LAUNCHES_REQUEST';
export const GET_LAUNCHES_SUCCESS = 'GET_LAUNCHES_SUCCESS';
export const GET_LAUNCHES_FAILED = 'GET_LAUNCHES_FAILED';



// const api = apis.create();

export const logout = () => ({
  type: LOGOUT
});

export const getLaunchesRequest = (payload) => ({
  type: GET_LAUNCHES_REQUEST
});

export const getLaunchesSuccess = (payload) => ({
  type: GET_LAUNCHES_SUCCESS,
  payload
});

export const getLaunchesFailed = (payload) => ({
  type: GET_LAUNCHES_FAILED,
  payload
});

export const tryLogout = () => {
  return function (dispatch, getState) {
    api.logout().then((res) => {
      if (res.ok) {
        AsyncStorage.removeItem('token');
        Actions.login();
      }
    })
  }
}

export const tryGetLaunches = () => {
  return function (dispatch, getState) {
    dispatch(getLaunchesRequest());
    api.getLaunches().then((res) => {
      console.log(res);
      if (res.ok) {
        dispatch(getLaunchesSuccess(res.data));
      } else {
        dispatch(getLaunchesFailed(res.data));
      }
    })
  }
}

