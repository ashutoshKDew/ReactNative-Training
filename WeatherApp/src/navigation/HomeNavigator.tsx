import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, DetailScreen} from '../screen/index';
import {NAVIGATION} from '../constants/navigation';
import NotificationScreen from '../screen/notification/NotificationScreen';

const Stack = createNativeStackNavigator();

interface DetailScreenParams {
  name: string;
}

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={NAVIGATION.home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailScreen}
        name={NAVIGATION.detail}
        options={({route}) => ({
          title: (route.params as DetailScreenParams)?.name ?? 'Detail',
        })}
      />
      <Stack.Screen
        component={NotificationScreen}
        name={NAVIGATION.LINK_SCREEN}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
