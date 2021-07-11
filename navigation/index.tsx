import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { observer, inject } from 'mobx-react';
import AuthNavigator from './Auth/AuthNavigator';
import AppNavigator from './App/AppNavigator';
import { IAuthStore } from '../types/store';

const Navigation: React.FC<{ authStore: IAuthStore }> = ({ authStore }) => {
  return (
    <NavigationContainer>
      {authStore.user.jwt === undefined ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default inject((authStore: IAuthStore) => authStore)(
  observer(Navigation),
);
