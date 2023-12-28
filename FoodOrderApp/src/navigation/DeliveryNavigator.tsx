import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DeliveryScreen from '../screens/home/delivery/DeliveryScreen';
import RestaurantDetail from '../screens/home/restaurant';
import {DeliveryStackParamList} from '../../types/navigation';

const Stack = createNativeStackNavigator<DeliveryStackParamList>();

export function DeliveryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeliveryScreen"
        component={DeliveryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
