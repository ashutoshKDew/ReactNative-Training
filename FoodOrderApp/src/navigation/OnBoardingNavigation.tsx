import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {LoginSignUp} from '../screens/index';
import {NavigationContainer} from '@react-navigation/native';
import AskUserLocation from '../screens/components/AskUserLocation';
import HomeNavigation from './HomeNavigation';
import {Button, Text, View} from 'react-native';
import {OnBoardingStackParamList} from '../../types/navigation';

const Stack = createNativeStackNavigator<OnBoardingStackParamList>();

export default function OnBoardingNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="LoginSignUp"
            component={LoginSignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeNavigation}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="SelectLanguageModal"
            component={SelectLanguageScreen}
          />
          <Stack.Screen
            name="AskUserLocation"
            component={AskUserLocation}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type Props = NativeStackScreenProps<
  OnBoardingStackParamList,
  'SelectLanguageModal'
>;

function SelectLanguageScreen({navigation}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
