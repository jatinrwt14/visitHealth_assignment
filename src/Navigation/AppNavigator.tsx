import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../Features/Dashboard/View/DashboardScreen';
import UserDetailsScreen from '../Features/UserDetails/View/UserDetailsScreen';

export type RootStackParamList = {
  Dashboard: undefined;
  UserDetails: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}
