import axios from 'axios';

const API = 'http://localhost:1337/api';

export const getModels = () => {
  return axios.get(`${API}/models`);
};

export const getRandomModel = () => {
  return axios.get(`${API}/models/random`);
};

export const createModel = (payload: any) => {
  return axios.post(`${API}/models`, {
    ...payload,
  });
};
