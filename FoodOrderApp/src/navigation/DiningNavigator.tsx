import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DiningScreen} from '../screens/home/dining/DiningScreen';
import {DiningStackParamList} from '../../types/navigation';

const Stack = createNativeStackNavigator<DiningStackParamList>();

export function DiningNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiningScreen"
        component={DiningScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
