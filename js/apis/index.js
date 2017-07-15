import apisauce from 'apisauce';
import {AsyncStorage} from 'react-native';
const baseURL = 'http://192.168.0.168:8080/api';

const json = (data) => {
  return JSON.stringify(data);
}

const formData = (data) => {
  const str = [];
  for (const p in data) {
    const key = encodeURIComponent(p);
    const value = encodeURIComponent(data[p]);
    str.push(`${key}=${value}`);
  }
  return str.join('&');
}

const api = apisauce.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token)
    request.headers['Authentication'] = token;
  else
    delete request.headers['Authentication'];
});

const login = (userInfo) => {
  const { username, password } = userInfo;
  return api.post('/login', json({
    username,
    password,
  }));
};

const register = (userInfo) => {
  const { name, email, username, password } = userInfo;
  return api.post('/register', json({
    name,
    email,
    username,
    password,
  }));
};

const getLaunches   = () => api.post('/getlaunches');

const changeStatus  = (payload) => api.post('/changestatus', json(payload))

const getConfInfo   = () => api.post('/getconfinfo');

const logout        = () => api.post('/logout');

const launchEA      = (payload) => api.post('/launchea', json(payload)); 

export default {
  api,
  json,
  login, 
  register, 
  logout, 
  changeStatus, 
  getLaunches, 
  getConfInfo,
  launchEA
};