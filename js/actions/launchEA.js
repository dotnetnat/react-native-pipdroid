import apis from '../apis';
import {Actions} from 'react-native-router-flux';

export const GET_CONF_INFO_REQUEST  = 'GET_CONF_INFO_REQUEST';
export const GET_CONF_INFO_SUCCESS  = 'GET_CONF_INFO_SUCCESS';
export const GET_CONF_INFO_FAILED   = 'GET_CONF_INFO_FAILED';

export const UPLOAD_EA_REQUEST  = 'UPLOAD_EA_REQUEST';
export const UPLOAD_EA_SUCCESS  = 'UPLOAD_EA_SUCCESS';
export const UPLOAD_EA_FAILED   = 'UPLOAD_EA_FAILED';

export const LAUNCH_EA_REQUEST  = 'LAUNCH_EA_REQUEST';
export const LAUNCH_EA_SUCCESS  = 'LAUNCH_EA_SUCCESS';
export const LAUNCH_EA_FAILED   = 'LAUNCH_EA_FAILED';

export const getConfInfo = () => {
	return function (dispatch, getState) {
		dispatch({ type: GET_CONF_INFO_REQUEST });

		apis.getConfInfo().then((res) => {
			console.log(res);
			if (res.ok)
				dispatch({type: GET_CONF_INFO_SUCCESS, payload: res.data});
			else
				dispatch({type: GET_CONF_INFO_FAILED, payload: res.data});
		});
	}
}

export const luanchEA = (payload) => {
	return function (dispatch, getState) {
		dispatch({ type: LAUNCH_EA_REQUEST });

		apis.launchEA(payload).then((res) => {
			if (res.ok)
				dispatch({type: LAUNCH_EA_SUCCESS, payload: res.data});
			else
				dispatch({type: LAUNCH_EA_FAILED, payload: res.data});
		});
	}
}

