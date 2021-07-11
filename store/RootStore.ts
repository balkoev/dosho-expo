import AuthStore from './AuthStore';
// import AppStore from "./AppStore";

class RootStore {
  authStore = new AuthStore();
  // appStore = new AppStore(this);
}

export default new RootStore();
