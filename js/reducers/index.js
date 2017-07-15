
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import login from './login';
import home from './home';
import launchEA from './launchEA';

export default combineReducers({
  drawer,
  user,
  list,
  login,
  home,
  launchEA
});
