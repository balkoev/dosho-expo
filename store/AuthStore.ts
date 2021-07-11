import {
  observable,
  action,
  makeObservable,
  runInAction,
  configure,
} from 'mobx';
import { persist } from 'mobx-persist';
import { Api } from '../api';
import { ILanguage, IUser } from '../types';

const apiClient = new Api();
configure({
  enforceActions: 'never',
});

export default class AuthStore {
  constructor() {
    makeObservable(this);
  }

  @persist @observable user: IUser = {
    id: '',
  };
  @observable languages: ILanguage[] = [];
  @observable choosenLanguage: ILanguage = this.languages[0];
  @observable isLoading = {
    skip: false,
    language: false,
    count: false,
  };

  @action
  loginShadow = async (id: string) => {
    this.isLoading.skip = true;
    const user: IUser = await apiClient.loginShadow(id);
    runInAction(() => {
      this.user = user;
    });
    this.isLoading.skip = false;
  };

  @action
  getLanguages = async () => {
    const languages = await apiClient.getLanguages().then((data) => data);
    runInAction(() => {
      this.languages = languages;
      this.choosenLanguage = this.languages[0];
    });
  };

  @action
  setLanguage = async (userId: string, languageId: string) => {
    this.isLoading.language = true;
    const user = await apiClient.chooseLanguage(userId, languageId);
    runInAction(() => {
      this.user = { ...this.user, ...user };
    });
    this.isLoading.language = false;
  };

  @action
  setChoosenLanguage = (language: ILanguage) => {
    this.choosenLanguage = language;
  };

  @action
  setCount = async (userId: string, count: number) => {
    this.isLoading.count = true;
    const user = await apiClient.chooseCount(userId, count);
    runInAction(() => {
      this.user = { ...this.user, ...user };
    });
    this.isLoading.count = false;
  };
}
