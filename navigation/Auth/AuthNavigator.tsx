import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AuthScreen from '../../screens/Auth/AuthScreen';
import { AuthStackParamList } from '../../types/navigation';

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
}
