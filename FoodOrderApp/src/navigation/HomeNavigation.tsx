import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarIcon} from '../component/TabBarIcon';
import {DeliveryNavigator} from '../navigation/DeliveryNavigator';
import {DiningNavigator} from '../navigation/DiningNavigator';
import {useTheme} from '../hooks';
import {HomeParamList} from '../../types/navigation';

const Tab = createBottomTabNavigator<HomeParamList>();

export default function HomeNavigation() {
  //   const {colors} = useTheme();
  const {Common, Fonts, Gutters, Layout, darkMode: isDark} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: isDark ? 'red' : 'darkgreen',
        tabBarInactiveTintColor: isDark ? 'pink' : 'lightgreen',
      })}>
      <Tab.Screen
        name="DeliveryScreenStack"
        component={DeliveryNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon color={color} routeName="Delivery" />
          ),
          tabBarBadge: undefined,
        }}
      />
      <Tab.Screen
        name="DiningScreenStack"
        component={DiningNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon color={color} routeName="Dining" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
