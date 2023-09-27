import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabNavigator, AppTabParamList} from '@routes';
import {PostCommentScreen, SettingsScreen} from '@screens';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
    </Stack.Navigator>
  );
}
