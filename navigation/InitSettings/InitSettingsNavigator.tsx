import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import ChooseCountScreen from '../../screens/InitSettings/ChooseCountScreen ';
import ChooseLanguageScreen from '../../screens/InitSettings/ChooseLanguageScreen';

const InitSettingsStack = createStackNavigator();

export default function InitSettingsNavigator() {
  return (
    <InitSettingsStack.Navigator
      initialRouteName="ChooseLanguageScreen"
      screenOptions={{ headerShown: false }}
    >
      <InitSettingsStack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
      />
      <InitSettingsStack.Screen
        name="ChooseCountScreen"
        component={ChooseCountScreen}
      />
    </InitSettingsStack.Navigator>
  );
}
