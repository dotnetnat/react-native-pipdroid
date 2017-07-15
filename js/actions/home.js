import apis from '../apis';
import {api, json} from '../apis';
import type { Action } from './types';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

export const LOGOUT = 'LOGOUT';

export const GET_LAUNCHES_REQUEST = 'GET_LAUNCHES_REQUEST';
export const GET_LAUNCHES_SUCCESS = 'GET_LAUNCHES_SUCCESS';
export const GET_LAUNCHES_FAILED = 'GET_LAUNCHES_FAILED';

export const CHANGE_STATUS_REQUEST = 'CHANGE_STATUS_REQUEST';
export const CHANGE_STATUS_SUCCESS = 'CHANGE_STATUS_SUCCESS';
export const CHANGE_STATUS_FAILED = 'CHANGE_STATUS_FAILED';


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
    apis.logout().then((res) => {
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
    apis.getLaunches().then((res) => {
      console.log(res);
      if (res.ok) {
        dispatch(getLaunchesSuccess(res.data));
      } else {
        dispatch(getLaunchesFailed(res.data));
      }
    })
  }
}

export const changeStatus = (payload) => {
  return function (dispatch, getState) {
    dispatch({type: CHANGE_STATUS_REQUEST});
    console.log(payload);
    apis.changeStatus(payload).then((res) => {
      if (res.ok) {
        dispatch({type: CHANGE_STATUS_SUCCESS, payload: res.data});
      } else {
        dispatch({type: CHANGE_STATUS_FAILED, payload: res.data});
      }
    });
  }
}