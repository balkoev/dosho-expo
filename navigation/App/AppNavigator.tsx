import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { observer, inject } from 'mobx-react';
import InitSettingsNavigator from '../InitSettings/InitSettingsNavigator';
import { IAuthStore } from '../../types/store';
import { AppStackParamList } from '../../types/navigation';

const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC<{ authStore: IAuthStore }> = ({ authStore }) => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {!authStore.user.learningLanguage || !authStore.user.learningCount ? (
        <AppStack.Screen
          name="InitSettings"
          component={InitSettingsNavigator}
        />
      ) : (
        <AppStack.Screen name="App" component={BottomTabNavigator} />
      )}
    </AppStack.Navigator>
  );
};

export default inject((authStore: IAuthStore) => authStore)(
  observer(AppNavigator),
);
