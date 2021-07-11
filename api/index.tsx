import axios from 'axios';
import { DOMAIN, AUTH_TOKEN } from '../constants/index';

const config = {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
};

export class Api {
  constructor() {}

  loginShadow = (id: string) => {
    return axios
      .post(`${DOMAIN}/auth/shadow`, { installationId: id })
      .then((response) => response.data);
  };

  getLanguages = () => {
    const languages = axios
      .get(`${DOMAIN}/languages`, config)
      .then((response) => response.data);
    return languages;
  };

  chooseLanguage = (userId: string, languageId: string) => {
    return axios
      .patch(`${DOMAIN}/users/${userId}`, {
        learningLanguage: languageId,
      })
      .then((response) => response.data);
  };

  chooseCount = (userId: string, count: number) => {
    return axios
      .patch(`${DOMAIN}/users/${userId}`, {
        learningCount: count,
      })
      .then((response) => response.data);
  };
}
