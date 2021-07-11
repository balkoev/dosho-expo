import { StackNavigationProp } from '@react-navigation/stack';
import { IAuthStore } from './store';

export type AuthStackParamList = {
  Auth: undefined;
  ChooseCountScreen: undefined;
};

export type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

export type AuthScreenProps = {
  navigation?: AuthNavigationProp;
  authStore: IAuthStore;
};

export type AppStackParamList = {
  InitSettings: undefined;
  App: undefined;
};

export type AppNavigationProp = StackNavigationProp<AppStackParamList>;

export type AppScreenProps = {
  navigation?: AppNavigationProp;
  authStore: IAuthStore;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
