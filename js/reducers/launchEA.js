import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

const initialState = {
  msg: null,
  servers: [],
  symbols: [],
  timeframes:[],
  eas: []
};

export default function (state = initialState, action) {
	
  switch (action.type) {
    case 'GET_CONF_INFO_SUCCESS':
      return Object.assign({}, state, {
				servers: action.payload.servers,
				symbols: action.payload.symbols,
				timeframes: action.payload.timeframes,
				eas: action.payload.eas,
			});
    case 'LAUNCH_EA_SUCCESS':
      // Actions.home();
      return Object.assign({}, state);
    default:
      return state;
	}
}