import apisauce from 'apisauce';
import {AsyncStorage} from 'react-native';
const baseURL = 'http://192.168.0.168:8080/api';

function json(data) {
  return JSON.stringify(data);
}

function formData(data) {
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
  console.log(token);
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

const getLaunches = () => {
  return api.post('/getlaunches');
}

const logout = () => {
  return api.post('/logout');
}

export default {api, login, register, logout, getLaunches};